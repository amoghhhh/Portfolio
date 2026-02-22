import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  introductionText: string = `I'm Amogh Gupta, a DevOps Engineer with 2 years of professional experience in cloud infrastructure, automation, and CI/CD pipelines. 
  I specialize in AWS services, Terraform, Kubernetes, Docker, and Linux system administration. My experience includes building 
  and deploying scalable applications from scratch, implementing robust CI/CD pipelines, and developing comprehensive monitoring 
  systems using Prometheus, Grafana, Jaeger, OpenTelemetry, and Fluentbit. I also have strong development skills in Java and 
  Spring Boot, enabling me to bridge the gap between development and operations effectively.`;
  
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
