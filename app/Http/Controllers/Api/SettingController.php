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

    	foreach ($data as $lang => $value) {
    		$insertedArr = [];

    		if (is_array($value)) {
                // return $value;
                foreach ($value as $field => $value_locale) {
        			$insertedArr['key'] = $field;
    				$insertedArr[$lang]['value_locale'] = $value_locale;
    			}

    		} else {
    			$insertedArr = [
    				'key' => $lang,
    				'value' => $value,
    			];
    		}

            print_r($insertedArr);
    		Setting::create($insertedArr);
    	}
    }
}
