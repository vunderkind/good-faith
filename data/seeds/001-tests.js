
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beneficiaries').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('beneficiaries').insert([
        {firstName: 'Koku', lastName: 'Baboni', phone: '09044657677', isWhatsApp: 'True', email: 'kokubaboni@gmail.com', context: 'I need help, as quickly as possible too!', paymentLink: 'https://helpkokubaboni.com', location: 'Lagos, Nigeria', socialMedia: 'kokz4luv', isVerified: 'False'},
        {firstName: 'Koku', lastName: 'Baboni', phone: '09044657677', isWhatsApp: 'True', email: 'kokubaboni@gmail.com', context: 'I need help, as quickly as possible too!', paymentLink: 'https://helpkokubaboni.com', location: 'Lagos, Nigeria', socialMedia: 'kokz4luv', isVerified: 'False'},
        {firstName: 'Koku', lastName: 'Baboni', phone: '09044657677', isWhatsApp: 'True', email: 'kokubaboni@gmail.com', context: 'I need help, as quickly as possible too!', paymentLink: 'https://helpkokubaboni.com', location: 'Lagos, Nigeria', socialMedia: 'kokz4luv', isVerified: 'False'},
      ]);
    });
};
