export const jobTypes = [
    {
        label: 'DONATION',
        value: 'UNDERGRADUATE'
    },
    {
        label: 'COLLABORATION',
        value: 'POSTGRADUATE'
    },
    {
        label: 'PART TIME',
        value: 'DOCTORATE'
    },
]

export const formatJobType = (jobtype: string) => {
    return jobTypes.find(job => job.value)!.label;
}