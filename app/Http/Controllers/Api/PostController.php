<?php

namespace App\Http\Controllers\Api;

use App\CRUD\CrudAbstract;
use App\Models\Post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends CrudAbstract
{
    protected $config = [
    	'model' => [
    		'name' => Post::class,
    		'rules' => [
    			'title' => 'required',
    			'description' => 'required',
    		],
    	],
    ];
}
