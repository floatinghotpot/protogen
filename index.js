#!/usr/bin/env node

'use strict';

var fs = require('fs'),
	path = require('path'),
    exec = require('child_process').exec;

var protogen_cli = {
    isWin: function() {
        return /^win/.test(process.platform);
    },
    resolve_app_path: function( app ) {
        var folders = process.env.PATH.split( this.isWin() ? ";" : ":" );
        for(var i=0; i<folders.length; i++) {
            var trypath = folders[i] + "/" + app;
            if(fs.existsSync(trypath)) return trypath;
        }
        return "";
    },
    call_protogen_exe: function(args) {
        var protogen_exe_path = __dirname + "/bin/protogen.exe";
        var cmd = protogen_exe_path + " " + args;
        
        if(! this.isWin()) {
            var mono_path = this.resolve_app_path( "mono" );
            if(mono_path == "") {
                console.log("Error: mono is required, to run exe on Mac/Linux.\n" +
                            "    Please install it from: http://www.mono-project.com/download/\n");
                return;
            }
            var protoc_path = this.resolve_app_path( "protoc" );
            if( protoc_path == "") {
                console.log("Error: protoc is required to parse .proto file.\n" +
                            "    Please install it from: https://github.com/google/protobuf\n" +
                            "    Or with macports, 'sudo port install protobuf-cpp'\n" + 
                            "    Or with homebrew, 'brew install protobuf'\n");
            }
            cmd = mono_path + " " + cmd;
        }
        exec(cmd, function(error, stdout, stderr){
            console.log(stdout);
            console.log(stderr);
        });
    },
    main: function( argv ) {
        var args = argv.slice(2);
        this.call_protogen_exe(args.join(" "));
    }
};

protogen_cli.main( process.argv );

    

