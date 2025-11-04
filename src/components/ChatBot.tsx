import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const faqs = [
  {
    question: "How to use Shop Mini?",
    answer: "Shop Mini is easy to use! Browse products, add items to your cart, and checkout when ready. You can filter products by category and search for specific items."
  },
  {
    question: "How to place an order?",
    answer: "To place an order: 1) Add products to your cart by clicking 'Add to Cart', 2) Go to your cart, 3) Click 'Proceed to Checkout', 4) Fill in your details, and 5) Confirm your order."
  },
  {
    question: "How to track my order?",
    answer: "After logging in, go to 'Order History' in the navigation menu to view all your orders and their current status."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and online payment methods. Payment is processed securely at checkout."
  },
  {
    question: "How do I create an account?",
    answer: "Click on 'Sign In' in the navigation menu, then select 'Sign Up'. Fill in your email and password to create your account."
  },
  {
    question: "Can I modify my order?",
    answer: "You can modify items in your cart before checkout. After placing an order, please contact support for any changes."
  }
];

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-lg">How can we help?</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4"
                      onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                    >
                      {faq.question}
                    </Button>
                    {selectedQuestion === index && (
                      <div className="bg-muted p-4 rounded-md text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </>
  );
};
