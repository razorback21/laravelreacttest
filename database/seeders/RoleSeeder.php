<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // clear out old data and reset primary keys
        Role::truncate();

        collect(['author' => 'Author', 'editor' => 'Editor', 'subscriber' => 'Subscriber', 'administrator' => 'Administrator'])
            ->each(fn($name, $code) => Role::create([
                'code' => $code,
                'name' => $name
            ]));
    }
}
