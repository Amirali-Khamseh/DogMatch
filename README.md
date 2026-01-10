# As of the beginning of 2026, this project will no longer be maintained and will be added to the archive.

## DogMatch 🐶❤️

DogMatch is a dating app designed to ensure no puppy is left lonely!
Here's a quick overview of the application's features and technologies:

## App Overview 🐾:

DogMatch is a full-stack dating app for dogs, dedicated to connecting furry friends and ensuring no puppy is left alone.

## Tech Stack ⚙️:

Built with Next.js Version 14 using TypeScript for modern, scalable, and efficient web development.
Utilizes Next.js features like Server Actions, server-side data fetching, and server-side rendering for optimal performance.

## Authentication 🔒:

Secured with NextAuth (version 5).
Supports Google and GitHub OAUTH login methods, in addition to email and password authentication.
Features password recovery and reset options.

- I removed the email based login , because the email service provider "resend" which i have used in this project doesn't support the Vercel domains for configuring a mail service , such as forgot password or confirm email address .❌

## Database & ORM 💾:

PostgreSQL is used as the database management system.
Prisma serves as the ORM for robust and efficient database interactions.
Zod ensures end-to-end type safety.

## State Management 📦:

Zustand is employed for global state management, providing a unified store for app state.

## Real-Time Communication 🔄:

Real-time messaging and presence tracking are facilitated through Pusher cloud services.

## Cloud Storage ☁️:

Cloudinary is the primary solution for cloud storage, handling user images and galleries efficiently.

## Admin Panel 🛠️:

An admin role and panel are available for managing user-uploaded images, including the ability to approve or reject content based on policy compliance.

![image](https://github.com/user-attachments/assets/78ff1a62-e1b0-42b8-bee4-d7d068b7fe3d)

Feel free to explore DogMatch and help make every puppy’s day a little brighter! 🐕🌟
