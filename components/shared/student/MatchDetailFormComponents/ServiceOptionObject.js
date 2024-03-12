const serviceOptions = [
    {
        name: "Upskilling Courses",
        fields: [
            { label: "Name (Textbox)", type: "text" },
            { label: "Type: Free/Paid (Dropdown)", type: "dropdown", options: ["Free", "Paid"] },
            { label: "Level: Beginner/Medium/Advanced (Dropdown)", type: "dropdown", options: ["Beginner", "Medium", "Advanced"] },
            { label: "Pacing: Self-paced/Instructor-paced (Dropdown)", type: "dropdown", options: ["Self-paced", "Instructor-paced"] }
        ]
    },
    {
        name: "Competitive Exam Resources",
        fields: [
            { label: "Name (Textbox)", type: "text" },
            { label: "Materials: Notes/Videos lectures (Checkbox)", type: "checkbox", options: ["Notes", "Videos lectures"] },
            { label: "Delivery: Live/Recorded (Dropdown)", type: "dropdown", options: ["Live", "Recorded"] },
            { label: "Cost: Free/Paid (Dropdown)", type: "dropdown", options: ["Free", "Paid"] }
        ]
    },
    {
        name: "Placement Opportunities",
        fields: [
            { label: "Field (Dropdown)", type: "dropdown", options: ["Marketing", "Development", "Web3", "Graphic Design", "Video Editing", "VFX"] },
            { label: "Resume (Upload PDF)", type: "file" },
            { label: "Location Preference (Textbox)", type: "text" },
            { label: "Salary Range (Textbox)", type: "text" },
            { label: "Eligibility/Qualification (Textbox)", type: "text" }
        ]
    },
    {
        name: "Health and Counseling Services",
        fields: [
            { label: "Category (Dropdown)", type: "dropdown", options: ["Physician", "Psychiatrist", "Counselor"] },
            { label: "Mode: Seek a Counselor Nearby/Telephonic Counseling (Dropdown)", type: "dropdown", options: ["Seek a Counselor Nearby", "Telephonic Counseling"] },
            { label: "Cost: Free/Paid (Dropdown)", type: "dropdown", options: ["Free", "Paid"] }
        ]
    },
    {
        name: "Scholarships and Financial Aid",
        fields: [
            { label: "Educational Qualification (Textbox)", type: "text" },
            { label: "Category (Dropdown)", type: "dropdown", options: ["General", "SC", "ST", "OBC"] },
            { label: "Purpose (Dropdown)", type: "dropdown", options: ["Startup", "Study"] }
        ]
    },
    {
        name: "Academic Advising",
        fields: [
            { label: "Educational Level (Dropdown)", type: "dropdown", options: ["High School", "College", "Graduate"] },
            { label: "Find an Advisor for (Dropdown)", type: "dropdown", options: ["Admission", "Subject", "Abroad"] }
        ]
    },
    {
        name: "Project Funding",
        fields: [
            {
                label: "Find a Sponsor",
                subfields: [
                    { label: "Field of Invention (Dropdown)", type: "dropdown" },
                    { label: "Estimated Funding Required (Textbox)", type: "text" },
                    { label: "Patentable/Utility (Dropdown)", type: "dropdown", options: ["Patentable", "Utility"] },
                    { label: "Idea Description (Textarea)", type: "textarea" }
                ]
            },
            {
                label: "Sponsor a Project",
                subfields: [
                    { label: "List of Projects (Dropdown)", type: "dropdown" },
                    { label: "Field of Invention (Dropdown)", type: "dropdown" }
                ]
            }
        ]
    },
    {
        name: "Collaboration and Alumni",
        fields: [
            { label: "Topics/Chat (Textbox)", type: "text" },
            { label: "Mentorship Sessions (Checkbox)", type: "checkbox" }
        ]
    },
    {
        name: "Interview Preparation",
        fields: [
            { label: "Soft Skills/Mock Interview (Checkbox)", type: "checkbox" }
        ]
    },
    {
        name: "Internship and Training",
        fields: [
            {
                label: "Find an Internship",
                subfields: [
                    { label: "Place (Textbox)", type: "text" },
                    { label: "Field (Dropdown)", type: "dropdown" },
                    { label: "Stipend (Textbox)", type: "text" },
                    { label: "Duration (Textbox)", type: "text" }
                ]
            },
            {
                label: "Technical Training",
                subfields: [
                    { label: "Place (Textbox)", type: "text" },
                    { label: "Field (Dropdown)", type: "dropdown" },
                    { label: "Price (Textbox)", type: "text" },
                    { label: "Duration (Textbox)", type: "text" }
                ]
            }
        ]
    }
];

export default serviceOptions;
