# React Virtualization Demo

This repository contains the code examples for the article [Virtualizing React](https://renanleonel.com/posts/virtualizing-react), which explores different approaches to implementing virtualization in React.

## Overview

This demo showcases:

- Custom virtualization implementation from scratch
- TanStack Virtual integration
- Integration with shadcn/ui Select component
- Performance comparisons between different approaches

The article covers:

1. Understanding Virtualization
2. Pure Implementation from scratch
3. TanStack Virtual Implementation
4. Comparing both approaches

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo in action.

## Implementation Details

The repository includes two main implementations:

### Pure Implementation

- Custom virtualization logic built from scratch
- Demonstrates core concepts like:
  - Virtual window management
  - Buffer zones
  - Height calculations
  - Position management

### TanStack Virtual Implementation

- Production-ready solution using TanStack Virtual
- Showcases advanced features and optimizations

Both implementations are integrated with shadcn/ui's Select component to demonstrate practical usage in a real-world scenario.

## Tech Stack

- [Next.js](https://nextjs.org)
- [TanStack Virtual](https://tanstack.com/virtual)
- [shadcn/ui](https://ui.shadcn.com/)

## Learn More

For a detailed explanation of the implementations and concepts, read the full article:
[Virtualizing React](https://renanleonel.com/posts/virtualizing-react)
