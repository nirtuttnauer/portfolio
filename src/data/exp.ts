// Define the type for experience data
type ExperienceItem = BaseItem & {
    company: string;
    location: string;
};

export const experienceData: ExperienceItem[] = [
    {
        title: "DevClub Intern",
        company: "DevClub",
        location: "Remote",
        startDate: 2023,
        endDate: 2024,
        description: `Gained proficiency in advanced web development technologies such as React.js, Express, and MongoDB through comprehensive training at DevClub. Received mentorship to become a Full Stack Developer.`,
        techStack: "React.js, MongoDB, Webpack"
    },
];