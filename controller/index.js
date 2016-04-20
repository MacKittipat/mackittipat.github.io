var level = {
    excellent: {
        name: 'EXCELLENT',
        value: 100
    },
    veryGood: {
        name: 'VERY GOOD',
        value: 75
    },
    good: {
        name: 'GOOD',
        value: 50
    },
    fair: {
        name: 'FAIR',
        value: 25
    }
}

var app = angular.module('myResume', []);
app.controller('ResumeController', function () {
    this.name = 'Kittipat';
    this.lastName = 'Metachoochok';
    this.contact = {
        email: 'mac.kittipat@gmail.com',
        mobilePhone: '084-776-2700'
    };
    this.abilities = [
        {
            category: 'Programming Language',
            skills: [
                'Java',
                'JavaScript',
                'HTML',
                'CSS',
                'SQL'
            ]
        },
        {
            category: 'Framework',
            skills: [
                'Spring Framework',
                'Node.js',
                'Express.js',
                'jQuery',
                'Bootstrap'
            ]
        },
        {
            category: 'Database',
            skills: [
                'MySQL',
                'MongoDB',
                'Apache Hadoop',
                'Apache Cassandra'
            ]
        }
    ];
    this.workExps = [
        {
            dateTime: 'April 2009 - January 2011',
            company: 'Freelance Programmer',
            position: 'Freelance Programmer',
            detail: 'Develop and maintain web application for clients'
        },
        {
            dateTime: 'April 2010 - May 2010',
            company: 'BEAM Enterprise',
            position: 'Web Application Developer (Internship)',
            detail: 'Develop and integrate web analytic to website'
        },
        {
            dateTime: 'April 2011 - August 2013',
            company: 'ABC Tech (Thailand)',
            position: 'Junior System Developer',
            detail: 'Develop and maintain web application for online newspaper in Norway.'
        },
        {
            dateTime: 'August 2013 - Present',
            company: 'ABC Tech (Thailand)',
            position: 'System Developer',
            detail: 'Develop and maintain web application for online newspaper in Norway.'
        },
    ];
});