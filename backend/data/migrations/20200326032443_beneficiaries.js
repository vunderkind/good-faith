
exports.up = function(knex, Promise) {
    return knex.schema.createTable('beneficiaries', tbl => {
        tbl.increments();
        tbl.text('firstName', 128).notNullable();
        tbl.text('lastName', 128).notNullable();
        tbl.float('phone', 128).unique().notNullable();
        tbl.boolean('isWhatsApp').notNullable();
        tbl.string('email').unique();
        tbl.string('context').notNullable();
        tbl.string('paymentLink').unique().notNullable();
        tbl.string('location').notNullable();
        tbl.string('socialMedia').unique();
        tbl.boolean('isVerified');
        tbl.timestamp('created_at').defaultTo(knex.fn.now());

        
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('beneficiaries');
  
};
