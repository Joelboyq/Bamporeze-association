export const jobTypes = [
    {
        label: 'Full time',
        value: 'FULL_TIME'
    },
    {
        label: 'Part time',
        value: 'PART_TIME'
    },
    {
        label: 'Internship',
        value: 'INTERNSHIP'
    },

]

export const formatJobType = (jobtype: string) => {
    return jobTypes.find(job => job.value)!.label;
}