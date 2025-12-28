# General Coding Preferences

If I don't specify it, assume I want a Typescript answer.
Do not add code comments, the code should be self-explanatory
Except for very simple one-level ternary operators, avoid nested ternary operators, use IF ELSE instead.
Avoid using complex if else flows, use if only on one level and early return to avoid nesting.
Keep the code simple and maintainable
Use descriptive variable and function names
Use built-in modules and avoid external dependencies where possible
Ask the user if you require any additional dependencies before adding them

Follow the SOLID principles when coding:

- Single Responsibility Principle: Each class or module should have one and only one reason to change.
- Open/Closed Principle: Software should be open for extension but closed for modification.
- Liskov Substitution Principle: Subclasses must be usable in place of their base classes without altering correctness.
- Interface Segregation Principle: Prefer many small, specific interfaces over a single, large, general one.
- Dependency Inversion Principle: High-level modules should not depend on low-level modules; both should depend on abstractions.

# Global Agent Rules

- **Environment Files Safety:** ALWAYS use the `fs_read` and `fs_write` tools when accessing or modifying `.env`, `.env.local`, `.env.example`, or any other sensitive environment configuration files. NEVER use the basic `read` or `edit` tools for these files to avoid permission issues and ensure proper handling of sensitive data.
