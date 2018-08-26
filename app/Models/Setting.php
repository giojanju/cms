<?php

namespace App\Models;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
	use Translatable;

    protected $fillable = [
    	'key',
    	'value',
    ];

    protected $with = ['translations'];

    public $translatedAttributes = ['value_locale'];
}
