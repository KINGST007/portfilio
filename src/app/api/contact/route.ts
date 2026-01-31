import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters").max(1000, "Message must be less than 1000 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Contact form submission:', body);
    
    // Validate request body
    const validatedData = contactSchema.parse(body);
    
    console.log('Validated data:', validatedData);
    
    // Store contact submission in database
    const submission = await db.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      },
    });
    
    console.log('Submission created with ID:', submission.id);
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Contact form submitted successfully!",
        id: submission.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Return error response
    if (error instanceof z.ZodError) {
      console.error('Validation error details:', error.errors);
      const errorMessages = error.errors.map((e: any) => e.message).join(", ");
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed: " + errorMessages,
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('Database or server error:', error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { 
        success: false, 
        message: "Server error: " + errorMessage 
      },
      { status: 500 }
    );
  }
}
