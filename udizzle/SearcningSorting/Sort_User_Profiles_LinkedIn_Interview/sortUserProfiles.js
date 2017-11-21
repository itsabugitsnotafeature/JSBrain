
// Given
const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// Result
const this_result = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];

let result = endorsements.reduce((prev, current) => {
    if (prev.length === 0) {
        let entry = {
            skill: current.skill,
            user: [current.user],
            count: 1
        }
        prev.push(entry);
        return prev;
    } else {
        let existingSkill = prev.filter((eachSkill) => {
            if (eachSkill.skill === current.skill){
                return true;
            }
        });

        if (existingSkill.length !== 0) {
            // Push user to current skill
            // Increase count for current skill
            prev.map((eachSkillSet) => {
                if (eachSkillSet.skill === current.skill) {
                    eachSkillSet.user.push(current.user);
                    eachSkillSet.count += 1;
                    // return eachSkillSet
                }
            });

            return prev
        } else {
            // Create new skill and add first user to it
            let entry = {
                skill: current.skill,
                user: [current.user],
                count: 1
            }
            prev.push(entry);
            return prev;
        }
    }
}, [])

console.log(JSON.stringify(result, null, 2));
