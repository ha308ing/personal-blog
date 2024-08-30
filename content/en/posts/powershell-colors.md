+++
title = 'Powershell Colors'
date = 2024-04-26T03:44:44+04:00
draft = false
tags = ["powershell"]
showTableOfContents = true
+++

## View `PSStyle` Variables

`$PSStyle`  
this prints varialbes taht can be used to style powershell output.  
Color variables `Foreground.*` and `Background.*` are read-only and are taken from terminal.

## Get Variables to Style

`Get-PSReadlineOption | Select *color*`,  
which outputs a list like (a bit modified, for copy purpose):

- Command
- Comment
- ContinuationPrompt
- Default
- Emphasis
- Error
- InlinePrediction
- Keyword
- ListPrediction
- ListPredictionSelected
- ListPredictionTooltip
- Member
- Number
- Operator
- Parameter
- Selection
- String
- Type
- Variable

## Set and Apply Colors

Create an object with [variables](#get-variables-to-style) and [values](#view-psstyle-variables)

To set `hex` colors: `$PSStyle.{Background | Foreground}.FromRGB(0x<color-in-hex>)`

To set background and foreground, set the sum.

To apply the colors, pass this object to `-Colors` parameter of `Set-PSReadLineOption`:

*Example*:

```ps1
$MyTheme = @{
	ListPredictionSelected = $PSStyle.Foreground.White + $PSStyle.Background.FromRGB(0x000000)
}

Set-PSReadLineOption -Colors $MyTheme
```

Put it in the powershell initialization script:
- `profile.ps1` in the same directory with `pwsh.exe` (`$PSHOME`)
- or `$PROFILE`, by default `%USERPFORILE%/Documents/PowerShell/Microsoft.PowerShell_profile.ps1`

## Sources

- [4sysops.com/Format rendering](https://4sysops.com/archives/using-powershell-with-psstyle#rtoc-3)
- [4sysops.com/Token colors](https://4sysops.com/archives/change-powershell-console-syntax-highlighting-colors-of-psreadline/)
- [powershell docs/$PSStyle](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_ansi_terminals?view=powershell-7.4#psstyle)
