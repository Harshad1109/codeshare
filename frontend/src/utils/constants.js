export const LANGUAGE_VERSIONS = {
  c: "10.2.0",
  cpp: "10.2.0",
  java: "15.0.2",
  python: "3.10.0",
  javascript: "18.15.0",
  typescript: "5.0.3",
  csharp: "6.12.0",
  php: "8.2.3",
  sql: "3.36.0",
};

export const CODE_SNIPPETS = {
  c: `// Welcome to CodeShare!
  #include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

  cpp: `// Welcome to CodeShare!
  #include <bits/stdc++.h>
using namespace std;

void greet(const string& name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("World");
    return 0;
}`,

  java: `// Welcome to CodeShare!
  public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

  python: `# Welcome to CodeShare!
  def greet(name):
    print(f"Hello, {name}!")

greet("World")`,

  javascript: `// Welcome to CodeShare!
  function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`,

  typescript: `// Welcome to CodeShare!
  type Greeter = {
  (name: string): void;
};

const greet: Greeter = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greet("World");`,

  csharp: `// Welcome to CodeShare!
  using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,

  php: `<?php
  // Welcome to CodeShare!
function greet($name) {
    echo "Hello, " . $name . "!";
}

greet("World");
?>`,

  sql: `/* 
  Welcome to CodeShare!
  Welcome to SQL!
  Try running a query against a sample database.
*/

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');

SELECT * FROM users;
`,
};
