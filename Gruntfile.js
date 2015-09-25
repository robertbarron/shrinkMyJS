'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    carpetas : {
      btt: 'btt',
      dojo_btt: 'dojo_btt',
      sources : 'sources'
    },
    notify: {
      init: {
        options: {
          message: 'Compilado terminado!'
        }
      }
    },
    uglify: {
      btt: {
        files: {
          '<%= carpetas.btt %>/btt-min.js': ['<%= carpetas.btt %>/btt.js']
        }
      },
      dojo_btt: {
        files: {
          '<%= carpetas.dojo_btt %>/dojo_BTT-min.js': ['<%= carpetas.dojo_btt %>/dojo_BTT.js']
        }
      },
      sources: {
        files: {
          '<%= carpetas.sources %>/unsorted/compiled.min.js' : ['<%= carpetas.sources %>/**/*.js']
        }
      },
      ordenado: {
        files: {
          '<%= carpetas.sources %>/sorted/compiled.min.js' : 
          [
            '<%= carpetas.sources %>/GlobalFunctions.js',
            '<%= carpetas.sources %>/BanorteWebNavigationEngine.js',
            '<%= carpetas.sources %>/RepetitivePaginator.js',
            '<%= carpetas.sources %>/MessageWidgetPatch.js',
            '<%= carpetas.sources %>/BanorteScreenCover.js',
            '<%= carpetas.sources %>/appTour.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 

  grunt.registerTask('btt', function (target) {
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    grunt.log.ok("                                     MINIFICANDO BTT                                            ");
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    
    grunt.task.run([
      'uglify:btt',          // Minifica el archivo btt.js
      'notify:init'          // Notifica en ventana emergente el término del proceso init
    ]);
  });

  grunt.registerTask('dojo_btt', function (target) {
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    grunt.log.ok("                                     MINIFICANDO DOJO-BTT                                       ");
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    
    grunt.task.run([
      'uglify:dojo_btt',     // Minifica el archivo de dojo_BTT.js
      'notify:init'          // Notifica en ventana emergente el término del proceso init
    ]);
  });

  grunt.registerTask('unsorted', function (target) {
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    grunt.log.ok("                       CONCATENANDO Y MINIFICANDO ARCHIVOS JS EN CARPETA FUENTE                 ");
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    
    grunt.task.run([
      'uglify:sources',      // Concatena y minifica los archivos listados en el index.jsp de configuracion
      'notify:init'          // Notifica en ventana emergente el término del proceso init
    ]);
  });

  grunt.registerTask('sorted', function (target) {
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    grunt.log.ok("            CONCATENANDO Y MINIFICANDO ARCHIVOS JS ORDENADAMENTE EN CARPETA FUENTE              ");
    grunt.log.ok("------------------------------------------------------------------------------------------------");
    
    grunt.task.run([
      'uglify:ordenado',     // Concatena y minifica los archivos listados en el index.jsp de configuracion
      'notify:init'          // Notifica en ventana emergente el término del proceso init
    ]);
  });
};