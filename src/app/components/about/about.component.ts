import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  introductionText: string = `This is Amogh Gupta, currently working as a DevOps Engineer, where I have developed a strong foundation in cloud
  technologies, automation, and continuous integration and continuous deployment (CI/CD) practices. My role involves working extensively with AWS,
  Kubernetes, and the ELK stack, focusing on the deployment and management of scalable and resilient applications.
  In addition to my technical skills, I have a solid background in software development, particularly with Java and Spring Boot, 
  which enables me to effectively collaborate with development teams to optimize workflows and enhance system performance.
  I am particularly passionate about leveraging best practices in DevOps to streamline processes and deliver high-quality software solutions. 
  I appreciate the opportunity to discuss how my skills and experiences align with the goals of your team.`;
  
  displayedText: string = '';
  index: number = 0;
  typingSpeed: number = 10; // Adjust speed for typing effect

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    if (this.index < this.introductionText.length) {
      this.displayedText += this.introductionText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
