<?php

namespace App\Http\Controllers\Api;

use App\CRUD\CrudAbstract;
use App\Models\Setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends CrudAbstract
{
    protected $config = [
    	'model' => [
    		'name' => Setting::class,
    	],
    ];

    public function create(Request $request)
    {
    	$data = $request->all();

    	Setting::all()->each(function ($item) {
            $item->delete();
        });

    	foreach ($data as $key => $value) {
    		$insertedArr = [];
    		if (is_array($value)) {
    			$insertedArr['key'] = $key;

    			foreach ($value as $lang => $value_locale) {
    				$insertedArr[$lang]['value_locale'] = $value_locale;
    			}

    		} else {
    			$insertedArr = [
    				'key' => $key,
    				'value' => $value,
    			];
    		}

    		Setting::create($insertedArr);
    	}
    }
}
