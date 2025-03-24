import { Preview, Text } from "@repo/ui/units";
import { Locale } from "../../../../../i18n.config";
import WebSection from "../../../../components/layouts/websection";
import ApplyForm from "../../../../components/units/applyForm";
import Tag from "../../../../components/units/tag";
import { getSingleJob } from "../../../../utils/api";

interface SingleJobParams {
    params: {
        jobId: string,
        lang: Locale;
    }
}

const processJobType = (type: string) => {
    return type.toLowerCase().replace(/[_]/g, " ");
}

export default async function SingleJobPage({ params }: SingleJobParams) {
    const job = await getSingleJob(params.jobId);
    return (
        <WebSection about={job.title}>
            <div className="md:px-10 msm:px-4 md:py-12 msm:py-5 flex flex-col gap-10 shadowed -mt-20 bg-white rounded-sm">
                <div className="flex flex-col gap-3 ">
                    <Tag text="Open position" />
                    <Text variant="title_2" > {job.title} </Text>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2501 14.15V18.4C20.2501 19.494 19.4631 20.436 18.3781 20.58C16.2911 20.857 14.1621 21 12.0001 21C9.83806 21 7.70906 20.857 5.62206 20.58C4.53706 20.436 3.75006 19.494 3.75006 18.4V14.15M20.2501 14.15C20.4875 13.9436 20.6775 13.6883 20.807 13.4016C20.9364 13.1149 21.0023 12.8036 21.0001 12.489V8.706C21.0001 7.625 20.2321 6.691 19.1631 6.531C18.0304 6.36142 16.892 6.23234 15.7501 6.144M20.2501 14.15C20.0561 14.315 19.8301 14.445 19.5771 14.53C17.1333 15.3408 14.5748 15.7528 12.0001 15.75C9.35206 15.75 6.80506 15.321 4.42306 14.53C4.17631 14.4479 3.94778 14.3189 3.75006 14.15M3.75006 14.15C3.5126 13.9436 3.32262 13.6883 3.19315 13.4016C3.06369 13.1149 2.99782 12.8036 3.00006 12.489V8.706C3.00006 7.625 3.76806 6.691 4.83706 6.531C5.96975 6.36142 7.10814 6.23233 8.25006 6.144M15.7501 6.144V5.25C15.7501 4.65326 15.513 4.08097 15.091 3.65901C14.6691 3.23705 14.0968 3 13.5001 3H10.5001C9.90332 3 9.33102 3.23705 8.90907 3.65901C8.48711 4.08097 8.25006 4.65326 8.25006 5.25V6.144M15.7501 6.144C13.2538 5.95108 10.7463 5.95108 8.25006 6.144M12.0001 12.75H12.0081V12.758H12.0001V12.75Z" stroke="#0A142F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <Text variant="label" className="capitalize"> {processJobType(job.type)} </Text>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 21H20.25M4.5 3H19.5M5.25 3V21M18.75 3V21M9 6.75H10.5M9 9.75H10.5M9 12.75H10.5M13.5 6.75H15M13.5 9.75H15M13.5 12.75H15M9 21V17.625C9 17.004 9.504 16.5 10.125 16.5H13.875C14.496 16.5 15 17.004 15 17.625V21" stroke="#0A142F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <Text variant="label" className="capitalize"> {job?.location} </Text>
                        </div>
                    </div>
                </div>
                <hr className="border border-brand-darkblue-10 my-1" />
                <Preview value={job!.description} />
                <hr className="border border-brand-darkblue-10 my-1" />
                <ApplyForm jobId={job.id} locale={params.lang} />
            </div>
        </WebSection>
    );
}