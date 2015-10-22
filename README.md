# ProtoGen

CLI tool to parse protobuf .proto file to C#, based on protobuf-net, also works on Windows/Mac/Linux.

# Purpose

* protobuf, Protocol Buffers - Google's data interchange format https://developers.google.com/protocol-buffers/

* protobuf-net, a C# implementation, by Marc Gravell, https://github.com/mgravell/protobuf-net

* protogen.exe, a CLI comes with protobuf-net project, can parse .proto to C#, but it works on Windows only.

* node-protogen-csharp, this tool, a wrapper to protogen.exe, can also work on Mac/Linux.

# Install

```bash
[sudo] npm install -g protogen
```

# Dependency

It comes with protogen.exe, written in C#, and built with Mono.

It works on Windows, and also works on Mac/Linux, if installed following dependencies:

* Mono, the cool framework to develop and run .NET client and server applications on different platforms.
(http://www.mono-project.com/download/)

* protoc, the binary executable of protobuf.
Please install it from: https://github.com/google/protobuf, 
Or with macports:
```bash
sudo port install protobuf-cpp
```
Or, with homebrew:
```bash
brew install protobuf
```

# How To Use #

Same as protogen.exe on Windows.

```bash
protogen -i:{infile2} [-i:{infile2}] [-o:{outfile}] [-t:{template}] [-p:{prop}[=value]] [-q] [-d]
```

Examples:
```bash
protogen -i:input.proto -o:output.cs
protogen -i:input.proto -o:output.xml -t:xml
protogen -i:input.proto -o:output.cs -p:datacontract -q
protogen -i:input.proto -o:output.cs -p:observable=true
```
# How It Works #

On windows, it just call the protogen.exe.

On Mac/Linux, it use mono to load protogen.exe.

# Credits #

A small tool created by Raymond Xie, any comments are welcome.
