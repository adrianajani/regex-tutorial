Regex Hex Tutorial

# Title: Matching a Valid Email Address

Introductory paragraph: This tutorial explains how to use a regular expression to validate email addresses, ensuring they follow a standard format commonly used across web applications.

## Summary

In this tutorial, we will break down the regex `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/` and explain how each component works to ensure a valid email address is matched. You'll learn how this pattern validates email structures, including user names, domains, and extensions.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors
- `^`: Ensures the regex matches from the start of the string.
- `$`: Ensures the regex matches up to the end of the string.

### Quantifiers
- `+`: Matches one or more occurrences of the preceding token.
- `{2,6}`: Matches between 2 and 6 occurrences of the preceding token.

### Grouping Constructs
- `([a-z0-9_\.-]+)`: Captures the username part of the email.
- `([\da-z\.-]+)`: Captures the domain name.
- `([a-z\.]{2,6})`: Captures the domain extension.

### Bracket Expressions
- `[a-z0-9_\.-]`: Matches lowercase letters, digits, underscores (`_`), periods (`.`), or hyphens (`-`).
- `[\da-z\.-]`: Matches digits (`\d`), lowercase letters, periods (`.`), or hyphens (`-`).
- `[a-z\.]`: Matches lowercase letters and periods.

### Character Classes
- `\d`: Matches any digit (0-9).
- `[a-z]`: Matches any lowercase letter.

### The OR Operator
- Not used explicitly in this regex.

### Flags
- No flags are used in this regex.

### Character Escapes
- `\.`: Escapes the period to match a literal `.`.
- `\-`: Ensures the hyphen is interpreted literally.

## Examples
| String             | Match? | Reason                                |
|---------------------|--------|---------------------------------------|
| `user@example.com` | ✅ Yes | Valid email format                    |
| `user.name@domain` | ❌ No  | Missing domain extension              |
| `user@domain..com` | ❌ No  | Double period in domain extension     |
| `@domain.com`      | ❌ No  | Missing username                      |
| `user@domain.c`    | ❌ No  | Domain extension is too short         |

Quick demonstraion video of webapp [here](https://drive.google.com/file/d/18qLvR2R0GfHO1ya7dZpHHKN-Qz_2EZWI/view?usp=sharing)