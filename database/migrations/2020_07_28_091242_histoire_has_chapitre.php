<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class HistoireHasChapitre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histoire_has_chapitre', function (Blueprint $table) {
            $table->biginteger('id_histoire')->unsigned();
            $table->foreign('id_histoire')->references('id')->on('histoire');
            $table->biginteger('id_chapitre')->unsigned();
            $table->foreign('id_chapitre')->references('id')->on('chapitre');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histoire_has_chapitre');
    }
}
