<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Textes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('textes', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->longText('texte');
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
        Schema::dropIfExists('textes');
    }
}
