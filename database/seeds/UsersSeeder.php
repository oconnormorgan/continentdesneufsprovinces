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
    }
}
