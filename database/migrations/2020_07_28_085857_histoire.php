<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Histoire extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histoire', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->longText('resumé');
            $table->unsignedBigInteger('id_auteur')->nullable();
            $table->foreign('id_auteur')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histoire');
    }
}
