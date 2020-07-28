<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyChapitre extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chapitre', function (Blueprint $table) {
            $table->unsignedBigInteger('id_validation')->nullable();
            $table->foreign('id_validation')->references('id')->on('validation');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('chapitre', function (Blueprint $table) {
            $table->dropForeign(['id_validation']);
        });
    }
}
