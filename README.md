# Volunteer Management System

Team 1 Project - COSC 4353:

Chase Cotton

Jay Jacob Davis

Kishan Chauhan

### Note: This project is deprecated from the database.

# Tech Stack

### Frontend

Svelte: Reactive web framework for building UI components

Tailwind CSS: Utility-first CSS framework for styling

DaisyUI: UI component library built on top of Tailwind CSS

TypeScript: Strongly typed JavaScript for scalable development

### Backend

PostgreSQL: Relational database for structured data storage

Supabase: Backend-as-a-Service (BaaS) for database management and authentication

# Getting Started

### Install Dependencies

npm install --force

### Run the Development Server

npm run dev

# Features

User Authentication – Secure login and sign-up

Volunteer Matching – Connect volunteers to events based on skills and availability

Manager Matching – Assign managers to oversee volunteer activities

Event Management – Create, update, and manage events

Volunteer History – Track volunteer participation and history

Notification System – Notify users of updates and changes

Report Generation – Export data as PDFs and CSVs

# Code Coverage Report

File	% Stmts	% Branch	% Funcs	% Lines	Uncovered Line #s

All files	46.85%	43.75%	75%	46.85%	

src/app.d.ts	0%	0%	0%	0%	1-3

src/hooks.server.ts	100%	100%	100%	100%	

src/lib/index.ts	100%	100%	100%	100%	

src/lib/supabaseClient.ts	100%	100%	100%	100%	

src/routes/+layout.server.ts	100%	100%	100%	100%	

src/routes/+layout.ts	100%	100%	100%	100%	

src/routes/+layout.svelte	100%	100%	100%	100%	1-13

src/routes/account/+page.svelte	100%	100%	100%	100%	

src/routes/auth/confirm/+page.svelte	100%	100%	100%	100%	1-32

src/routes/auth/error/+page.svelte	100%	100%	100%	100%	

src/routes/eventManagement/+page.svelte	100%	100%	100%	100%	

src/routes/matching/+page.svelte	51.61%	21.42%	60%	51.61%	174-184

src/routes/notificationSystem/+page.svelte	69.56%	31.25%	71.42%	69.56%	19-34, 35

src/routes/protected/profile/+page.svelte	97.77%	100%	100%	97.77%	122-157

src/routes/volunteerHistory/+page.svelte	100%	100%	100%	100%	

src/routes/volunteermatching/+page.svelte	0%	0%	0%	0%	1-217
