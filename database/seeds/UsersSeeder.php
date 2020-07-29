<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'Admin'.'@gmail.com',
            'password' => bcrypt('password'),
            'id_role' => '1'
        ]);
        DB::table('users')->insert([
            'name' => 'Angelus Noir-corbeau',
            'email' => 'angelus'.'@gmail.com',
            'password' => bcrypt('password'),
            'id_role' => '2'
        ]);
        DB::table('users')->insert([
            'name' => 'Hénok Encaustum',
            'email' => 'henok'.'@gmail.com',
            'password' => bcrypt('password'),
            'id_role' => '2'
        ]);
        DB::table('users')->insert([
            'name' => 'Ellerina Espantera',
            'email' => 'ellerina'.'@gmail.com',
            'password' => bcrypt('password'),
            'id_role' => '2'
        ]);
    }
}
