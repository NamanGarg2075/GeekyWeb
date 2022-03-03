---
title: Hello World in Python
description: Open code editor of your choice like vs code or python IDLE, fist open command prompt in your windows machine and start typing the below command...
image: "/img/docs/python/hello-world-in-python.png"
keywords: [coding, python, hello world in python]
sidebar_position: 3
sidebar_label: Hello World in Python
slug: /python/hello-world-in-python
---

# Hello World in Python

<!-- Import files -->

import SocialShare from '@site/src/components/SocialShare'

![Introduction to Python](../../../static/img/docs/python/hello-world-in-python.png)

## How to create Hello, World program.

Open code editor of your choice like vs code or python IDLE, fist open command prompt in your windows machine and start typing the below command:

```bash
print("Hello, World")
```

Hit `Enter`, it will give you output something like this:

```bash
Hello, World
```

## Hello World Python file

Create a new file `hello.py` that contains the following line:

```bash
print('Hello, World')
```

You can use the Python 3 `print` function in Python 2 with the following `import` statement:

```bash
from __future__ import print_function
```

Python 2 has a number of functionalities that can be optionally imported from Python 3 using the `__future__` module, as [discussed here](http://stackoverflow.com/documentation/python/809/incompatibility-between-python-3-and-python-2/6894/use-future-imports#t=201612062212456247425).

:::caution
If using Python 2, you may also type the line below. Note that this is not valid in Python 3 and thus not recommended because it reduces cross-version code compatibility

```bash
print 'Hello, World'
```

:::

In your terminal, navigate to the directory containing the file `hello.py`
Type `python hello.py`, then hit the `Enter` key.

```bash {2}
$ python hello.py
Hello, World
```

You should see `Hello, World` printed to the console.

:::tip
You can also substitute `hello.py` with the path to your file. For example, if you have the file in your home directory and your user is "user" on Linux, you can type python /home/user/hello.py
:::

## Launch an interactive Python shell

By executing (running) the `python` command in your terminal, you are presented with an interactive Python shell. This is also known as the [Python Interpreter](https://docs.python.org/3.6/tutorial/interpreter.html) or a REPL (for 'Read Evaluate Print Loop').

```bash
$ python
Python 2.7.12 (default, Jun 28 2016, 08:46:01)
[GCC 6.1.1 20160602] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print 'Hello, World'
Hello, World
>>>
```

If you want to run Python 3 from your terminal, execute the command `python3`.

```bash
$ python3
Python 3.6.0 (default, Jan 13 2017, 00:00:00)
[GCC 6.1.1 20160602] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print('Hello, World')
Hello, World
>>>
```

Alternatively, start the interactive prompt and load file with `python -i <file.py>`.

In command line, run:

```bash
$ python -i hello.py
"Hello World"
>>>
```

There are multiple ways to close the Python shell:

```bash
>>> exit()
```

or

```bash
>>> quit()
```

Alternatively, `CTRL + D` will close the shell and put you back on your terminal's command line.

If you want to cancel a command you're in the middle of typing and get back to a clean command prompt, while staying inside the Interpreter shell, use `CTRL + C`.

[Try an interactive Python shell online](https://www.python.org/shell/).

## Other Online Shells

Various websites provide online access to Python shells.

Online shells may be useful for the following purposes:

Run a small code snippet from a machine which lacks python installation(smartphones, tablets etc).

- Learn or teach basic Python. - Solve online judge problems.
  Examples:

Disclaimer: documentation author(s) are not affiliated with any resources listed below.

https://www.python.org/shell/ - The online Python shell hosted by the official Python website. <br/>
https://ideone.com/ - Widely used on the Net to illustrate code snippet behavior.<br/>
https://repl.it/languages/python3 - Powerful and simple online compiler, IDE and interpreter. Code, compile, and run code in Python.<br/>
https://www.tutorialspoint.com/execute_python_online.php - Full-featured UNIX shell, and a user-friendly project explorer.<br/>
http://rextester.com/l/python3_online_compiler - Simple and easy to use IDE which shows execution time

## Run commands as a string

Python can be passed arbitrary code as a string in the shell:

```bash
$ python -c 'print("Hello, World")'
Hello, World
```

This can be useful when concatenating the results of scripts together in the shell.

## Shells and Beyond

- **Package Management** - The PyPA recommended tool for installing Python packages is [PIP](https://pip.pypa.io/en/stable/). To install, on your command line execute `pip install <the package name>`. For instance, `pip install numpy`. (Note: On windows you must add pip to your PATH environment variables. To avoid this, use `python -m pip install <the package name>`)

- **Shells** - So far, we have discussed different ways to run code using Python's native interactive shell. Shells use Python's interpretive power for experimenting with code real-time. Alternative shells include [IDLE](https://docs.python.org/3/library/idle.html)- a pre-bundled GUI, [IPython](https://ipython.org/install.html)- known for extending the interactive experience, etc.

- **Programs** - For long-term storage you can save content to .py files and edit/execute them as scripts or programs with external tools e.g. shell, [IDEs](https://wiki.python.org/moin/IntegratedDevelopmentEnvironments)(such as [PyCharm](https://www.jetbrains.com/pycharm/download/)), [Jupyter notebooks](https://github.com/jupyter/notebook), etc. Intermediate users may use these tools; however, the methods discussed here are sufficient for getting started.

[Python tutor](http://www.pythontutor.com/visualize.html#mode=edit) allows you to step through Python code so you can visualize how the program will flow, and helps you to understand where your program went wrong.

[PEP8](https://www.python.org/dev/peps/pep-0008/) defines guidelines for formatting Python code. Formatting code well is important so you can quickly read what the code does.

<SocialShare />
