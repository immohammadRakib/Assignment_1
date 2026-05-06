---
title: "Generics: The Secret to Flexible Yet Strict Code"
date: "2024-05-07"
author: "Your Name"
---

# The Reusability Dilemma

As developers, we love writing code once and using it everywhere. But in TypeScript, this creates a dilemma.

Imagine you want to write a function that returns the first item of an array.
- If you type it as `number[]`, you can't use it for strings.
- If you use `any[]`, you lose all safety. TypeScript won't know what comes out of the function, so you won't get any auto-complete suggestions.

This is where **Generics** come in.

---

# What are Generics?

Think of Generics as **"Variables for Types"**.

Just like a function accepts arguments (values) to be flexible, Generics allow a component to accept types to be flexible. It's like a transparent box: whatever you put in, you can clearly see what comes out.

### See the Difference

**Without Generics (Unsafe):**
```typescript
function getFirst(arr: any[]) {
    return arr[0]; // Returns 'any'.
}

const item = getFirst([10, 20]); 
// TypeScript has NO clue that 'item' is a number. 
// It won't warn you if you try item.toUpperCase() (which would crash).
