import { VercelRequest, VercelResponse } from '@vercel/node';

interface AcademicProjectRequest {
  studentName: string;
  email: string;
  phone: string;
  institution: string;
  course: string;
  semester: string;
  projectType: string;
  domain: string;
  projectTitle: string;
  description: string;
  requirements: string;
  deadline: string;
  budget: string;
  needsPPT: boolean;
  additionalNotes?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: AcademicProjectRequest = req.body;
    
    // Send email notification (you'll need to configure SMTP)
    await sendAcademicProjectNotification(formData);
    
    // Store in database if needed
    console.log('Academic Project Request:', formData);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Academic project request submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing academic form:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function sendAcademicProjectNotification(data: AcademicProjectRequest) {
  // Create a Gmail-compatible email body with proper formatting
  const emailSubject = `🎓 New Academic Project Request - ${data.projectType} (${data.domain})`;
  
  const emailBody = `
🎓 NEW ACADEMIC PROJECT REQUEST
================================

👤 STUDENT INFORMATION:
• Name: ${data.studentName}
• Email: ${data.email}
• Phone: ${data.phone}
• Institution: ${data.institution}
• Course: ${data.course}
• Semester: ${data.semester}

📚 PROJECT DETAILS:
• Project Type: ${data.projectType}
• Domain: ${data.domain}
• Title: ${data.projectTitle}
• Description: ${data.description}
• Technical Requirements: ${data.requirements}
• Deadline: ${data.deadline}
• Budget Range: ${data.budget}
• PowerPoint Needed: ${data.needsPPT ? '✅ Yes (₹500 additional)' : '❌ No'}

📝 ADDITIONAL NOTES:
${data.additionalNotes || 'None provided'}

⏰ SUBMISSION TIME:
${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📧 QUICK ACTIONS:
• Reply to student: ${data.email}
• Call student: ${data.phone}

---
Aptivon Solutions - Academic Excellence System
Generated automatically from website form
  `.trim();

  // Store request data for potential database integration
  console.log('📧 ACADEMIC PROJECT REQUEST RECEIVED:');
  console.log('To:', 'singhal3.sachin7@gmail.com');
  console.log('Subject:', emailSubject);
  console.log('Student:', data.studentName, '(' + data.email + ')');
  console.log('Project:', data.projectType, '-', data.domain);
  console.log('Deadline:', data.deadline);
  console.log('Budget:', data.budget);
  console.log('PPT Required:', data.needsPPT ? 'Yes' : 'No');
  console.log('');
  console.log('FULL EMAIL CONTENT:');
  console.log(emailBody);
  console.log('========================');

  // Here you would typically integrate with email service like:
  // - SendGrid
  // - Nodemailer with Gmail SMTP
  // - AWS SES
  // For now, we're logging the email content
}