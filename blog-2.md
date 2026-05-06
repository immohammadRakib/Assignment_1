---
title: "The Art of Slicing: Stop Repeating Yourself with Pick and Omit"
---

# The "Copy-Paste" Trap

We have all been there. You start with a massive "Master Interface" for your data—let's say a `User` profile that has 20 different fields (name, email, password, address, history, etc.).

Then, you need to build a small "Profile Card" that only shows the user's *Name* and *Photo*.

**The Rookie Mistake:**
Your instinct might be to create a brand new interface called `ProfileCardProps` and manually type out `name` and `photo` again.

**Why is this bad?**
This is the "Copy-Paste Trap." If you later decide to rename `photo` to `avatarUrl` in your main User interface, your Profile Card won't know about it. You now have two separate sources of truth to maintain. This violates the **DRY (Don't Repeat Yourself)** principle.

---

# The Solution: Slicing Your Types

TypeScript gives us two powerful tools—`Pick` and `Omit`—that act like digital scissors. They let you cut out exactly what you need from your master interface without rewriting a single line of code.

## 1. Pick: The Selector

Think of `Pick` as a shopping list. You go into a supermarket (your Master Interface) and you list only the specific items you want to put in your basket.

Instead of defining a new type from scratch, you say:
> "From the **User** object, I want to **Pick** only the 'name' and 'email'."

This creates a specialized "slice" that is permanently linked to the original. If the original User updates, your slice updates too.

## 2. Omit: The Sculptor

`Omit` works in the opposite way. It's like sculpting a statue from a block of stone. You start with the whole block (the Master Interface) and chip away the pieces you *don't* need.

Imagine a "Create User" form. You need almost all the fields from the User interface, but you definitely *don't* want the `id` (because the database creates that) or `createdAt` timestamp.

Instead of listing the 18 fields you *do* want, you simply say:
> "Take the **User** object, but **Omit** the 'id' and 'createdAt' fields."

---

# How This Keeps Code DRY

By using these tools, you establish a **Single Source of Truth**.

1.  **Refactoring is Safer:** If you change a property type in the master interface, that change instantly flows down to every `Pick` and `Omit` type across your entire app.
2.  **Less Typing:** You aren't writing the same property names over and over again.
3.  **No Typo Bugs:** You can't misspell a property name. If you try to `Pick` a property that doesn't exist, TypeScript will yell at you immediately.

In summary, `Pick` and `Omit` allow you to create many specialized variations of a type while keeping your codebase clean, connected, and maintainable.
