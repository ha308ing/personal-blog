+++
title = 'Powershell Hotkeys Emacs'
date = 2024-04-24T19:52:10+04:00
draft = false
showTableOfContents = true
tags = ["powershell"]
+++

## Set Edit Mode 

`Set-PSReadLineOption -EditMode Emacs`

put it in the powershell initialization script:
- `profile.ps1` in the same directory with `pwsh.exe` (`$PSHOME`)
- or `$PROFILE`, by default `%USERPFORILE%/Documents/PowerShell/Microsoft.PowerShell_profile.ps1`

## View Unbounded Commands

`Get-PSReadLineKeyHandler -Unbound`

## View Specific Key Binding

<kbd>Alt+?</kbd>, then enter keys, and bounded command will be shown

## View Key Bindings

`Get-PSReadLineKeyHandler`, which prints:

### Basic editing functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Ctrl+g</kbd>                     | Abort                    | Abort the current operation, e.g. incremental history search
<kbd>Ctrl+o</kbd>                     | AcceptAndGetNext         | Accept the current line and recall the next line from history after the current line finishes executing
<kbd>Enter</kbd>                      | AcceptLine               | Accept the input or move to the next line if input is missing a closing token.
<kbd>Shift+Enter</kbd>                | AddLine                  | Move the cursor to the next line without attempting to execute the input
<kbd>Backspace</kbd>                  | BackwardDeleteChar       | Delete the character before the cursor
<kbd>Ctrl+Backspace</kbd>             | BackwardDeleteChar       | Delete the character before the cursor
<kbd>Ctrl+h</kbd>                     | BackwardDeleteChar       | Delete the character before the cursor
<kbd>Ctrl+u</kbd>                     | BackwardKillInput        | Move the text from the cursor to the beginning of the input to the kill ring
<kbd>Ctrl+x</kbd>,<kbd>Backspace</kbd>| BackwardKillInput        | Move the text from the cursor to the beginning of the input to the kill ring
<kbd>Alt+Backspace</kbd>              | BackwardKillWord         | Move the text from the start of the current or previous word to the cursor to the kill ring
<kbd>Escape</kbd>,<kbd>Backspace</kbd>| BackwardKillWord         | Move the text from the start of the current or previous word to the cursor to the kill ring
<kbd>Alt+c</kbd>                      | CapitalizeWord           | Find the next word starting from the current position and then upcase the first character and downcase the remaining characters.
<kbd>Escape</kbd>,<kbd>c</kbd>        | CapitalizeWord           | Find the next word starting from the current position and then upcase the first character and downcase the remaining characters.
<kbd>Ctrl+c</kbd>                     | CopyOrCancelLine         | Either copy selected text to the clipboard, or if no text is selected, cancel editing the line with CancelLine.
<kbd>Delete</kbd>                     | DeleteChar               | Delete the character under the cursor
<kbd>Ctrl+d</kbd>                     | DeleteCharOrExit         | Delete the character under the cursor, or if the line is empty, exit the process.
<kbd>Alt+l</kbd>                      | DowncaseWord             | Find the next word starting from the current position and then make it lower case.
<kbd>Escape</kbd>,<kbd>l</kbd>        | DowncaseWord             | Find the next word starting from the current position and then make it lower case.
<kbd>Ctrl+k</kbd>                     | KillLine                 | Move the text from the cursor to the end of the input to the kill ring
<kbd>Alt+d</kbd>                      | KillWord                 | Move the text from the cursor to the end of the current or next word to the kill ring
<kbd>Escape</kbd>,<kbd>d</kbd>        | KillWord                 | Move the text from the cursor to the end of the current or next word to the kill ring
<kbd>Alt+r</kbd>                      | RevertLine               | Equivalent to undo all edits (clears the line except lines imported from history)
<kbd>Escape</kbd>,<kbd>r</kbd>        | RevertLine               | Equivalent to undo all edits (clears the line except lines imported from history)
<kbd>Ctrl+t</kbd>                     | SwapCharacters           | Swap the current character with the character before it.
<kbd>Ctrl+_</kbd>                     | Undo                     | Undo a previous edit
<kbd>Ctrl+x</kbd>,<kbd>Ctrl+u</kbd>   | Undo                     | Undo a previous edit
<kbd>Ctrl+w</kbd>                     | UnixWordRubout           | Move the text from the cursor to the start of the current or previous whitespace delimited word to the kill ring
<kbd>Alt+u</kbd>                      | UpcaseWord               | Find the next word starting from the current position and then make it upper case.
<kbd>Escape</kbd>,<kbd>u</kbd>        | UpcaseWord               | Find the next word starting from the current position and then make it upper case.
<kbd>Ctrl+m</kbd>                     | ValidateAndAcceptLine    | Accept the input or move to the next line if input is missing a closing token. If there are other parse errors, unresolved commands, or incorrect parameters, show the error and continue editing.
<kbd>Ctrl+y</kbd>                     | Yank                     | Copy the text from the current kill ring position to the input
<kbd>Alt+.</kbd>                      | YankLastArg              | Copy the text of the last argument to the input
<kbd>Alt+_</kbd>                      | YankLastArg              | Copy the text of the last argument to the input
<kbd>Escape</kbd>,<kbd>.</kbd>        | YankLastArg              | Copy the text of the last argument to the input
<kbd>Escape</kbd>,<kbd>_</kbd>        | YankLastArg              | Copy the text of the last argument to the input
<kbd>Ctrl+Alt+y</kbd>                 | YankNthArg               | Copy the text of the first argument to the input
<kbd>Escape</kbd>,<kbd>Ctrl+y</kbd>   | YankNthArg               | Copy the text of the first argument to the input
<kbd>Alt+y</kbd>                      | YankPop                  | Replace the previously yanked text with the text from the next kill ring position
<kbd>Escape</kbd>,<kbd>y</kbd>        | YankPop                  | Replace the previously yanked text with the text from the next kill ring position

### Cursor movement functions 

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>LeftArrow</kbd>                  | BackwardChar             | Move the cursor back one character
<kbd>Ctrl+b</kbd>                     | BackwardChar             | Move the cursor back one character
<kbd>Alt+b</kbd>                      | BackwardWord             | Move the cursor to the beginning of the current or previous word
<kbd>Escape</kbd>,<kbd>b</kbd>        | BackwardWord             | Move the cursor to the beginning of the current or previous word
<kbd>Home</kbd>                       | BeginningOfLine          | Move the cursor to the beginning of the line
<kbd>Ctrl+a</kbd>                     | BeginningOfLine          | Move the cursor to the beginning of the line
<kbd>End</kbd>                        | EndOfLine                | Move the cursor to the end of the line
<kbd>Ctrl+e</kbd>                     | EndOfLine                | Move the cursor to the end of the line
<kbd>RightArrow</kbd>                 | ForwardChar              | Move the cursor forward one character
<kbd>Ctrl+f</kbd>                     | ForwardChar              | Move the cursor forward one character
<kbd>Alt+f</kbd>                      | ForwardWord              | Move the cursor forward to the end of the current word, or if between words, to the end of the next word.
<kbd>Escape</kbd>,<kbd>f</kbd>        | ForwardWord              | Move the cursor forward to the end of the current word, or if between words, to the end of the next word.

### History functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Alt+<</kbd>                      | BeginningOfHistory       | Move to the first item in the history
<kbd>Alt+></kbd>                      | EndOfHistory             | Move to the last item (the current input) in the history
<kbd>Ctrl+s</kbd>                     | ForwardSearchHistory     | Search history forward interactively
<kbd>DownArrow</kbd>                  | NextHistory              | Replace the input with the next item in the history
<kbd>Ctrl+n</kbd>                     | NextHistory              | Replace the input with the next item in the history
<kbd>UpArrow</kbd>                    | PreviousHistory          | Replace the input with the previous item in the history
<kbd>Ctrl+p</kbd>                     | PreviousHistory          | Replace the input with the previous item in the history
<kbd>Ctrl+r</kbd>                     | ReverseSearchHistory     | Search history backwards interactively

### Completion functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Tab</kbd>                        | Complete                 | Complete the input if there is a single completion, otherwise complete the input with common prefix for all completions.  Show possible completions if pressed a second time.
<kbd>Ctrl+Spacebar</kbd>              | MenuComplete             | Complete the input if there is a single completion, otherwise complete the input by selecting from a menu of possible completions.
<kbd>Alt+=</kbd>                      | PossibleCompletions      | Display the possible completions without changing the input

### Prediction functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>F4</kbd>                         | ShowFullPredictionTooltip| Show the full tooltip of the selected list-view item in the terminal's alternate screen buffer.
<kbd>F2</kbd>                         | SwitchPredictionView     | Switch between the inline and list prediction views.

### Miscellaneous functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Ctrl+l</kbd>                     | ClearScreen              | Clear the screen and redraw the current line at the top of the screen
<kbd>Alt+0</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+1</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+2</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+3</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+4</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+5</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+6</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+7</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+8</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+9</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>Alt+-</kbd>                      | DigitArgument            | Start or accumulate a numeric argument to other functions
<kbd>PageDown</kbd>                   | ScrollDisplayDown        | Scroll the display down one screen
<kbd>Ctrl+PageDown</kbd>              | ScrollDisplayDownLine    | Scroll the display down one line
<kbd>Ctrl+End</kbd>                   | ScrollDisplayToCursor    | Scroll the display to the cursor
<kbd>Ctrl+Home</kbd>                  | ScrollDisplayTop         | Scroll the display to the top
<kbd>PageUp</kbd>                     | ScrollDisplayUp          | Scroll the display up one screen
<kbd>Ctrl+PageUp</kbd>                | ScrollDisplayUpLine      | Scroll the display up one line
<kbd>F1</kbd>                         | ShowCommandHelp          | Shows help for the command at the cursor in an alternate screen buffer.
<kbd>Ctrl+Alt+?</kbd>                 | ShowKeyBindings          | Show all key bindings
<kbd>Alt+h</kbd>                      | ShowParameterHelp        | Shows help for the parameter at the cursor.
<kbd>Ctrl+x</kbd>,<kbd>Ctrl+e</kbd>   | ViEditVisually           | Invokes the console compatible editor specified by $env:VISUAL or $env:EDITOR on the current command line.
<kbd>Alt+?</kbd>                      | WhatIsKey                | Show the key binding for the next chord entered

### Selection functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Ctrl+x</kbd>,<kbd>Ctrl+x</kbd>   | ExchangePointAndMark     | Mark the location of the cursor and move the cursor to the position of the previous mark
<kbd>Shift+LeftArrow</kbd>            | SelectBackwardChar       | Adjust the current selection to include the previous character
<kbd>Shift+Home</kbd>                 | SelectBackwardsLine      | Adjust the current selection to include from the cursor to the start of the line
<kbd>Alt+B</kbd>                      | SelectBackwardWord       | Adjust the current selection to include the previous word
<kbd>Alt+a</kbd>                      | SelectCommandArgument    | Make visual selection of the command arguments.
<kbd>Shift+RightArrow</kbd>           | SelectForwardChar        | Adjust the current selection to include the next character
<kbd>Alt+F</kbd>                      | SelectForwardWord        | Adjust the current selection to include the next word using ForwardWord
<kbd>Shift+End</kbd>                  | SelectLine               | Adjust the current selection to include from the cursor to the end of the line
<kbd>Ctrl+@</kbd>                     | SetMark                  | Mark the location of the cursor

### Search functions

Key                                   | Function                 | Description
---                                   | --------                 | -----------
<kbd>Ctrl+]</kbd>                     | CharacterSearch          | Read a character and move the cursor to the next occurrence of that character
<kbd>Ctrl+Alt+]</kbd>                 | CharacterSearchBackward  | Read a character and move the cursor to the previous occurrence of that character


## Sources

- [learn.microsoft.com](https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-keyhandlers)
