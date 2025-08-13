import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  rating,
  text,
  image,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full flex-shrink-0 shadow-md border">
      <CardContent className="p-6">
        {/* Header with Avatar and Info */}
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={image}
              alt={name}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
            <div className="text-yellow-500 mt-1" aria-label={`${rating} out of 5 stars`}>
              {"⭐".repeat(rating)}
            </div>
          </div>
        </div>
        
        {/* Testimonial Text */}
        <p className="text-muted-foreground italic leading-relaxed">
          "{text}"
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;