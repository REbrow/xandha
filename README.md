<<<<<<< HEAD
bootstrap-fileinput
===================

[![Bower version](https://badge.fury.io/bo/bootstrap-fileinput.svg)](http://badge.fury.io/bo/bootstrap-fileinput)
[![Latest Stable Version](https://poser.pugx.org/kartik-v/bootstrap-fileinput/v/stable)](https://packagist.org/packages/kartik-v/bootstrap-fileinput)
[![License](https://poser.pugx.org/kartik-v/bootstrap-fileinput/license)](https://packagist.org/packages/kartik-v/bootstrap-fileinput)
[![Packagist Downloads](https://poser.pugx.org/kartik-v/bootstrap-fileinput/downloads)](https://packagist.org/packages/kartik-v/bootstrap-fileinput)
[![Monthly Downloads](https://poser.pugx.org/kartik-v/bootstrap-fileinput/d/monthly)](https://packagist.org/packages/kartik-v/bootstrap-fileinput)

An enhanced HTML 5 file input for Bootstrap 3.x with file preview for various files, offers multiple selection, and more. The plugin allows you a simple way to setup an advanced file picker/upload control built to work specially with Bootstrap CSS3 styles. It enhances the file input functionality further, by offering support to preview a wide variety of files i.e. images, text, html, video, audio, flash, and objects. In addition, it includes AJAX based uploads, dragging &amp; dropping files, viewing upload progress, and selectively previewing, adding, or deleting files.

![File Input Screenshot](https://lh3.googleusercontent.com/-3FiEmc_okc4/VBw_d2LBAJI/AAAAAAAAAL8/KbVj5X9Dus0/w596-h454-no/FileInput.jpg)

> NOTE: The latest version of the plugin is v4.3.2 (dev-master). Refer the [CHANGE LOG](https://github.com/kartik-v/bootstrap-fileinput/blob/master/CHANGE.md) for details. 

## Documentation and Demo

View the [plugin documentation](http://plugins.krajee.com/file-input) and [plugin demos](http://plugins.krajee.com/file-input/demo) at Krajee JQuery plugins. 

## Pre-requisites  

1. [Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Most modern browsers supporting HTML5 (inputs and FileReader API) including CSS3 & JQuery. For Internet Explorer, one must use IE versions 10 and above. IE9 and below will work as a normal file input, and will not support multiple file selection or the HTML 5 FileReader API.
4. With release 4.0, AJAX uploads are supported. AJAX uploads require that the browser support HTML5 FormData and XHR2 (XMLHttpRequest 2). Most modern browsers support FormData and XHR2. The plugin will automatically degrade to normal form based submission for browsers not supporting AJAX uploads.

> NOTE: You can use the [sass branch](https://github.com/kartik-v/bootstrap-fileinput/tree/sass) for installation using `bootstrap-sass` dependency.
The [master branch](https://github.com/kartik-v/bootstrap-fileinput/tree/master) can be used for installation using plain `bootstrap` dependency.

## Installation

### Using Bower
You can use the `bower` package manager to install. Run:

    bower install bootstrap-fileinput

### Using Composer
You can use the `composer` package manager to install. Either run:

    $ php composer.phar require kartik-v/bootstrap-fileinput "@dev"

or add:

    "kartik-v/bootstrap-fileinput": "@dev"

to your composer.json file

### Manual Install

You can also manually install the plugin easily to your project. Just download the source [ZIP](https://github.com/kartik-v/bootstrap-fileinput/zipball/master) or [TAR ball](https://github.com/kartik-v/bootstrap-fileinput/tarball/master) and extract the plugin assets (css and js folders) into your project.

## Usage

Step 1: Load the following assets in your header. 

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="path/to/css/fileinput.min.css" media="all" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- canvas-to-blob.min.js is only needed if you wish to resize images before upload.
     This must be loaded before fileinput.min.js -->
<script src="path/to/js/plugins/canvas-to-blob.min.js" type="text/javascript"></script>
<script src="path/to/js/fileinput.min.js"></script>
<!-- bootstrap.js below is only needed if you wish to the feature of viewing details
     of text file preview via modal dialog -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" type="text/javascript"></script>
<!-- optionally if you need translation for your language then include 
    locale file as mentioned below -->
<script src="path/to/js/fileinput_locale_<lang>.js"></script>
```

If you noticed, you need to load the `jquery.min.js` and `bootstrap.min.css` in addition to the `fileinput.min.css` and `fileinput.min.js`. The locale file `fileinput_locale_<lang>.js` can be optionally included for translating for your language if needed.

NOTE: The `canvas-to-blob.min.js` file is the source for the [JavaScript-Canvas-to-Blob plugin by blueimp](https://github.com/blueimp/JavaScript-Canvas-to-Blob). It is required to be loaded before `fileinput.js` if you wish to use the image resize feature of the **bootstrap-fileinput** plugin. For ease of access, the plugin source for JavaScript-Canvas-to-Blob is included in the `js/plugins` folder of this project repository.

Step 2: Initialize the plugin on your page. For example,

```js
// initialize with defaults
$("#input-id").fileinput();

// with plugin options
$("#input-id").fileinput({'showUpload':false, 'previewFileType':'any'});
```

The `#input-id` is the identifier for the input (e.g. `type = file`) on your page, which is hidden automatically by the plugin. 

Alternatively, you can directly call the plugin options by setting data attributes to your input field.

```html
<input id="input-id" type="file" class="file" data-preview-file-type="text" >
```

## License

**bootstrap-fileinput** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.
=======
#JQuery File Uploader
JQuery plugin to drag and drop files, including ajax upload and progress bar. The idea for this plugin is to keep it very simple; other options/plugins i found mess up a lot with the markup and provide some really 'hacky' ways to make it available for prehistoric browsers.

The focus will be for **modern browsers**, but also providing a method to know when is the plugin is not supported; with an easy interface to use on **any design** you come up.

Basic Javascript/Jquery knowledge is necesary to use this plugin: how to set parameters, callbacks, etc.

As for new features im open to suggestions, but please before doing so read the TODO file to know what i've in mind :)

Dual licensed under the MIT and GPL licenses.
Created by Daniel Morales. [Contact Me](mailto:daniminas@gmail.com) for more info or anything you want :)

[View Changelog](#changelog)

##Demo
Using Bootstrap: http://danielm.herokuapp.com/demos/dnd/

Plain HTML: http://danielm.herokuapp.com/demos/dnd/simple.php

Image Upload w/Preview: http://danielm.herokuapp.com/demos/dnd/image-preview.php

##API
````javascript
$("#drop-area-div").dmUploader(options);
````
This way you can initialize the plugin. As parameter you can set all variables you want and the same goes for callbacks;
down bellow you can see a list of what [options](#options) and [callbacks](#callbacks) are availabe.

##Markup
This is the simple html markup. The file input is optional but it provides an alternative way to select files for the user(check the online demo to se how to hide/style it)
````html
<div id="drop-area-div" style="width:400px;height:300px;">
  Drag and Drop Files Here<br />
  or click to add files using the input<br />
  <input type="file" name="files[]" multiple="multiple" title="Click to add Files">
</div>
````
Even if you test all this in different browsers I recommend to add some kind of link to a basic uploader, this is still a new feature on several platforms.

##Options

###url
Server URL to handle file uploads.

###method
Form method used by the upload request. Default is <code>POST</code>

###extraData
Extra parameters to submit with each file. (Imagine these as 'hidden' inputs)
````javascript
extraData: {
  varName:1,
  varName:'string'
}
````

###maxFileSize
Max size of each individual file for pre-submit validation. Default is <code>0</code> (no limit)

###allowedTypes
Regular expression to match file types for pre-submit validation. Default is <code>'\*'</code>. Ej: <code>image/*</code>

###extFilter
Extension(s) comma separted for pre-submit validation. Default is <code>NULL</code>. Ej: <code>jpg;png;gif</code>

###maxFiles
Sets how many files can be uploaded by the user. Default is <code>0</code> (no limit)

###dataType
Data type corresponds to what the server is going to return after a successful upload.

Default is <code>null</code> which means Jquery will try to 'guess' depending of what the server returns.

Other values can be: <code>xml</code>, <code>json</code>, <code>script</code>, or <code>html</code>

Ref: http://api.jquery.com/jquery.ajax/

###fileName
Field name used to submit the files on each request. Default is <code>file</code>
````php
/* As example if you set this to 'file', on the server side code you will
be able to access to the file doing something like this(if you use PHP): */
$_FILES[fileName];
````

##Callbacks

###onInit
Called once plugin is loaded, browser checks passed and it's ready to use.
````javascript
onInit: function(){
  console.log('Plugin successfully initialized');
}
````

###onFallbackMode
This is called when the Ajax/File or Drag and Drop API isn't supported by the browser. It's
up to you to notify the user, change something on the UI, etc..
````javascript
onFallbackMode: function(message){
  console.log('Upload plugin can't be initialized: ' + message);
}
````
**Note**: Even when D&D isn't supported by the browser user may be able to upload via the
file input (*if you included that on the HTML markup*).

###onNewFile
Called every time a file is added to the upload queue. <code>id</code> is a number to identify
the upload.

**From now on other callbacks referring to this upload will use the same <code>id</code>**.
````javascript
onNewFile: function(id, file){
  /* Fields availabe are:
     - file.name
     - file.type
     - file.size (in bytes)
  */
}
````
**Note**: As example; if a user selects/drag two files this function will be called twice.

###onBeforeUpload
Called right before a upload request is sent.
````javascript
onBeforeUpload: function(id){
  console.log('Starting to upload #' + id);
}
````

###onComplete
Called after all pending upload been processed (this include error **and** successful uploads)
````javascript
onComplete: function(){
  console.log('We reach the end of the upload Queue!');
}
````

###onUploadProgress
If the browser supports upload progress this will be called when we have an update.
````javascript
onUploadProgress: function(id, percent){
  console.log('Upload of #' + id ' is at %' + percent);
  // do something cool here!
}
````

###onUploadSuccess
Called after a file upload was completed without errors. <code>data</code> contains
the server response (See [settings](#datatype)) for more
````javascript
onUploadSuccess: function(id, data){
  console.log('Succefully upload #' + id);
  console.log('Server response was:');
  console.log(data);
}
````

###onUploadError
Triggers when some kind of connection problem happened(timeout, etc..)
````javascript
onUploadError: function(id, message){
  console.log('Error trying to upload #' + id + ': ' + message);
}
````

###onFileTypeError
Called when the mimetype pre-submit validation fails.
See (See [settings](#allowedtypes) for more.)
````javascript
onFileTypeError: function(file){
  console.log('File type of ' + file.name + ' is not allowed: ' + file.type);
}
````

###onFileSizeError
Called when the file size pre-submit validation fails.
See (See [settings](#maxfilesize) for more.)
````javascript
onFileSizeError: function(file){
  console.log('File size of ' + file.name + ' exceeds the limit');
}
````

###onFileExtError
Called when the file extension pre-submit validation fails.
See (See [settings](#extfilter) for more.)
````javascript
onFileExtError: function(file){
  console.log('File extension of ' + file.name + ' is not allowed');
}
````

###onFilesMaxError
Called when the user reaches the upload limit (number of files).
See (See [settings](#maxfiles) for more.)
````javascript
onFilesMaxError: function(file){
  console.log(file.name + ' cannot be added to queue due to upload limits.');
}
````

##Changelog
- [Nov 01 2013] Initial relase.
- [Feb 08 2014] Project moved to Github.
- [Feb 15 2014] Added option for pre-submit file extension validation. View: [extFilter](#extfilter)/[onFileExtError](#onfileexterror)
>>>>>>> 31e2b49eaea6b5cce07f6a7751fc5749fb34f8f1
