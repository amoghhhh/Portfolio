import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  hoveredData: { year: number; company: string; position: string } | null = null;
  ganttData = [
    { year: 2022, company: 'SAAARP Labs', position: 'Blockchain Developer' },
    { year: 2023, company: 'NEC Corporation', position: 'Internship Trainee' },
    { year: 2024, company: 'GEDU Services', position: 'Intern' },
    { year: 2024, company: 'Contevolve', position: 'Software Engineer Full-Time' },
  ];
  projects = [
    {
      date: '2024-07',
      title: 'EKS-Deployment',
      description: 'This project contains deployment configurations for Elasticsearch, Kibana, Metricbeat, and Packetbeat on Amazon EKS, with Metricbeat collecting and forwarding metrics from AWS CloudWatch to Elasticsearch for visualization in Kibana.',
      technologies: ['Amazon EKS', 'Kubernetes', 'Docker', 'Elasticsearch'],
      githubLink: 'https://github.com/amoghhhh/EKS-Deployment'
    },
    {
      date: '2024-08',
      title: 'Terraform-s3-website-hosting',
      description: 'This project uses Terraform to automate the creation of an AWS S3 bucket for static website hosting, showcasing Infrastructure as Code (IaC).',
      technologies: ['AWS-S3', 'Terraform', 'AWS IAM', 'IaC'],
      githubLink: 'https://github.com/amoghhhh/Terraform-s3-website-hosting'
    },
    {
      date: '2024-08',
      title: 'aws-two-tier-architecture-with-terraform',
      description: 'This Terraform project sets up a two-tier architecture on AWS with a public EC2 web server and a private RDS database, demonstrating VPC, subnets, and security configurations.',
      technologies: ['Terraform', 'AWS EC2', 'AWS RDS', 'AWS VPC', 'AWS Security Groups', 'AWS Subnets'],
      githubLink: 'https://github.com/amoghhhh/aws-two-tier-architecture-with-terraform'
    },
    {
      date: '2024-01',
      title: 'Alliance-for-Excellence-in-Consultancy',
      description: 'This project uses Java and Spring Boot for CRUD operations, an SQL database for data storage, and includes authentication features, resulting in a fully functional website.',
      technologies: ['Java', 'Spring Boot', 'React', 'SQL Database', 'Spring Security'],
      githubLink: 'https://github.com/amoghhhh/Alliance-for-Excellence-in-Consultancy'
    },
    {
      date: '2023-06',
      title: 'AmWebDrive',
      description: 'AmWebDrive is a blockchain-based storage system that provides secure and decentralized data storage solutions.',
      technologies: ['Blockchain', 'IPFS', 'JavaScript', 'Web3.js', 'Smart Contracts'],
      githubLink: 'https://github.com/amoghhhh/AmWebDrive'
    },
    {
      date: '2023-04',
      title: 'TicTacToe',
      description: 'The Tic-Tac-Toe game is a classic interactive game implemented to allow two players to compete against each other on a grid.',
      technologies: ['Java', 'XML', 'Gradle', 'Androi Studio', 'Android SDK'],
      githubLink: 'https://github.com/amoghhhh/TicTacToe'
    }
  ];
}