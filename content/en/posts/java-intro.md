+++
title = 'Java Intro'
date = 2024-04-18T12:58:24+04:00
draft = false
tags = ["java"]
showTableOfContents = true
+++

{{< katex >}}

A recursion function must have a halting condition,  
when the recursion function doesn't return itself, but a const.

Objects are created from a class.

## Compile and run

A class must have the same name as a file. 
The first letter is in upper case.  
To run, the class must have a _public_ _static_ method _main_:

```java
class Main {
  public static void main( String[] args ) {
    // ...
  }
}
```
**to compile**:  
`javac [-d <targetDir>] Main.java`

**to run**:  
`java Main`

## Variables

### Primitives

- _boolean_: 1 bit: true/false
- _char_: 2 bytes: single character/letter or ASCII values: 'C' / ASCII: 67

#### Numbers whole

name | size (in bytes) | convert to bits | range size (size in bits) | values range 
--- | --- | --- | --- | ---
_byte_ | 1 byte | \\( 2 ^ { 8 \times 1 \text{B} } \\) | 256 | -128 .. 127
_short_ | 2 bytes | \\( 2 ^ { 8 \times 2 \text{B} } \\) | 65536 | -32'768 .. 32'767
_int_ | 4 bytes | \\( 2 ^ { 8 \times 4 \text{B} } \\) | 4294967296 | -2'147'483'648 .. 2'147'483'647
_long_ | 8 bytes | \\( 2 ^ { 8 \times 8 \text{B} } \\) | _a lot_ | -9'223'372'036'854'775'808L .. 9'223'372'036'854'775'807L

#### Numbers with floating point

name | size (in bytes) | size (in bits) | number of decimal digits | examples
--- | --- | --- | --- | ---
_float_ | 4 bytes | \\( 2 ^ { 8 \times 4 \text{B} } \\) | 6 - 7 | _2.35f_, _23E5f_
_double_ | 8 bytes | \\( 2 ^ { 8 \times 8 \text{B} } \\) | 15 | _2.35d_, _23E5d_

### Non-primitive (reference types)

- _String_
- _Array_:
  - `String[] names = { "name1", "name2" }`
  - `java.util.ArrayList`, `java.util.Collections`
- `java.util.HashMap`
- `java.util.HashSet`
- `java.util.Iterator`
- _class_
- _interface_
- _enum_ - a group of contants
- wrapper classes (have `.toString()` method):
  - `Byte`: `byteValue()`
  - `Short`: `shortValue()`
  - `Integer`: `intValue()`
  - `Long`: `longValue()`
  - `Float`: `floatValue()`
  - `Double`: `doubleValue()`
  - `Boolean`: `booleanValue()`
  - `Character`: `charValue()`

### Type casting

Auto - in reverse must be manual:

_byte_ > _short_ > _char_ > _int_ > _long_ > _float_ > _double_

```java
char c = 'c'
int i = c; // auto type casting

c = (char) i; // manual type casting
```

## String

### Methods

- `str.length()`
- `str.toUpperCase()`
- `str.toLowerCase()`
- `str.indexOf(c)`
- `str.concat(str1)`

### Escape

Escape: `\"`, `\'`, `\\`

Escape sequencies:
- `\n` - new line
- `\r` - carriage return
- `\t` - tab
- `\b` - backspace
- `\f` - form feed

## Interface

An interface is a completely abstract class, that is used to group related methods with empty bodies (a body must be provided by the implement class)

Unlinke _classes_ interfaces are implemented (not extended)

_Class_ can only inherit from **one** superclass,  
but can implement **multiple** interfaces:  
`class Horse implements Animal, Mammal { ... }`

```java
interface Animal {
    int population = 3; // attributes are public static final by default
    void animalSound(); // methods are abstract public by default
    void run();
}

class Horse implements Animal {
    public void animalSound() {}

    public void run() {}
}
```

## Enums

_Enum_ like a _class_ can have attributes and methods.  
_Enum_ constants are `public static final`.  
_Enum_ cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).

```java
enum Level {
    LOW,
    MEDIUM,
    HIGH
}

Level level = Level.HIGH;
```

### Loop through an Enum

```java
for (Level level : Level.vales()) {
    System.out.println(level);
}
```

## Modifiers

### Access modifiers

#### For classes

- `public` - accessible by any other class
- _default_ - accessible by classes in the same package (not specified public)

#### For attributes, methods, constructors

- `public`
- `private` - within declared class
- `protected` - in the same package and subclasses
- _default_ - in the same package
Non-access modifiers:
for classes:
- `final` - the class cannot be inherited by other classes
- `abstract` - the class cannot be used to create objects

#### For attributes and methods

- `final` - cannot be overridden/modified, if you don't want the ability to override existing attribute values
- `static` - attributes and methods belongs to the class, rather than an object, can be accessed without createing an object of the class (unlike `public`)
- `abstract` - (on methods) can only be used in an abstract class, has no body abstract void run(); the body is provided by the subclass
- `transient` - attributes and methods are skipped when serializing the object containng them
- `synchronized` - methods can only be accessed by one thread at a time
- `volatile` - the value of an attribute is not cached thread-locally, and is always read from the "main memory"


## Operations

Operators | Precedence
--- | ---
postfix | `expr++` `expr--`
unary | `++expr` `--expr` `+expr` `-expr` `~` `!`
multiplicative | `*` `/` `%`
additive | `+` `-`
shift | `<<` `>>` `>>>`
relational | `<` `>` `<=` `>=` `instanceof`
equality | `==` `!=`
bitwise AND | `&`
bitwise exclusive OR | `^`
bitwise inclusive OR | `\|`
logical AND | `&&`
logical OR | `\|\|`
ternary | `? :`
assignment | `=` `+=` `-=` `*=` `/=` `%/` `&=` `^=` `|=` `<<=` `>>=` `>>>=`

<small>[source](https://dev.java/learn/language-basics/using-operators/#operators)</small>

## Exceptions

```java
try {
    // throw exception
    // throw new ArithmeticExecption("Error message")
    ...
} catch(Exception e) {
    // handle exeption
    ...
} finally {
    // executed regardless of the result
    ...
}
```

### Exception types

- `ArithmeticException`
- `FileNotFoundException`
- `ArrayIndexOutOfBoundsException`
- `SecurityException`
- ...

## File handling

```java
import java.io.File;

File file = new File("filename.txt");
```

### Methods

- `canRead()`
- `canWrite()`
- `createNewFile()`
- `delete()`
- `exists()`
- `getName()`
- `getAbsolutePath()`
- `length()`
- `list()`
- `mkdir()`

## Methods overloading

```java
// method overloading: single method name for difference parameters
static double add(double a, double b) {
    return a + b;
}

static int add(int a, int b) {
    return a + b;
}
```

## Links

- [repo with examples](https://github.com/ha308ing/w3schools-java)

## Sources

- [w3schools](https://www.w3schools.com/java)
- [dev.java](https://dev.java/learn)

    