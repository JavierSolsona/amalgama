export const generateProfile = (profile, cities, states) => {
    return {
        avatarUrl: profile.avatar_url,
        fullName: `${profile.first_name} ${profile.last_name}`,
        company: profile.company,
        details: truncate(profile.details, 100),
        email: profile.email,
        phoneNumber: `(${profile.phone.area_code}) ${profile.phone.number}`,
        addresses: profile.addresses.map(address => ({
            line1: address.line_1,
            line2: address.line_2,
            zipCode: address.zip_code,
            city: findById(cities, address.city_id),
            state: findById(states, address.state_id),
        }))
    };
};
