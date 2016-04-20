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
            category: 'PROGRAMMING LANGUAGE',
            skills: [
                {
                    name: 'HTML',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'CSS',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Java',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'JavaScript',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'PHP',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'Ruby',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
            ]
        },
        {
            category: 'FRAMEWORK / PLATFORM / LIBRARY',
            skills: [
                {
                    name: 'Spring Framework',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Node.js',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'jQuery',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'Express.js',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
                {
                    name: 'AngularJS',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
                {
                    name: 'Android',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
            ]
        },
        {
            category: 'SOFTWARE',
            skills: [
                {
                    name: 'IntelliJ IDEA',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Netbeans',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Git',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'Maven',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'MySQL',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'MongoDB',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
                {
                    name: 'Hadoop',
                    level: level.fair.value,
                    levelText: level.fair.name
                },
            ]
        },
        {
            category: 'OPERATING SYSTEM',
            skills: [
                {
                    name: 'Linux (Ubuntu)',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Microsoft Windows',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
            ]
        },
        {
            category: 'ENGLISH LANGUAGE',
            skills: [
                {
                    name: 'Listening',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Writing',
                    level: level.veryGood.value,
                    levelText: level.veryGood.name
                },
                {
                    name: 'Speaking',
                    level: level.good.value,
                    levelText: level.good.name
                },
                {
                    name: 'Reading',
                    level: level.good.value,
                    levelText: level.good.name
                },
            ]
        },
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