<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->foreignId('cv_id')->constrained()->onDelete('cascade'); // Link to the CV
            $table->string('name'); // Certification name
            $table->string('issuing_organization'); // Issuing organization
            $table->date('issue_date'); // Issue date
            $table->date('expiration_date')->nullable(); // Expiration date (nullable for no expiration)
            $table->string('credential_id')->nullable(); // Credential ID (optional)
            $table->text('description')->nullable(); // Description of the certification
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certifications');
    }
};
