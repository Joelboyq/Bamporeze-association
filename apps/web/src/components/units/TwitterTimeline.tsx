"use client";
import { useEffect } from 'react';

export default function TwitterTimeline() {
  useEffect(() => {
    // Only load the script if it hasn't been loaded yet
    const win = window as unknown as Record<string, any>;
    if (!win['twttr']) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    } else {
      win['twttr']?.widgets?.load();
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 mt-8 w-full">
      <div className="w-full max-w-xl">
        <div dangerouslySetInnerHTML={{ __html: `
<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\"><a href=\"https://twitter.com/ABA_Rwanda?ref_src=twsrc%5Etfw\">@ABA_Rwanda</a> conducted dialogues of parents/caregivers, and children to bridge intergenerational gaps in parenting and <a href=\"https://twitter.com/hashtag/childrights?src=hash&amp;ref_src=twsrc%5Etfw\">#childrights</a> in <a href=\"https://twitter.com/NyaruguruDistr?ref_src=twsrc%5Etfw\">@NyaruguruDistr</a>. Participants shared their feelings on modern parenting and outlined commitments and action plans to tackle identified challenges. <a href=\"https://t.co/TE95sm50aR\">pic.twitter.com/TE95sm50aR</a></p>&mdash; BAMPOREZE (@ABA_Rwanda) <a href=\"https://twitter.com/ABA_Rwanda/status/1936395517195423833?ref_src=twsrc%5Etfw\">June 21, 2025</a></blockquote>
<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">To combat food and waterborne diseases, limit erosion, and improve access to domestic water, <a href=\"https://twitter.com/ABA_Rwanda?ref_src=twsrc%5Etfw\">@ABA_Rwanda</a> has provided 100 water harvesting tanks to 100 families in Gatebe 1 village in <a href=\"https://twitter.com/NyagatareDistr?ref_src=twsrc%5Etfw\">@NyagatareDistr</a> as witnessed by the vice mayor for economic development. <a href=\"https://t.co/tiDQRyKWqS\">pic.twitter.com/tiDQRyKWqS</a></p>&mdash; BAMPOREZE (@ABA_Rwanda) <a href=\"https://twitter.com/ABA_Rwanda/status/1930586758644678883?ref_src=twsrc%5Etfw\">June 5, 2025</a></blockquote>
<blockquote class=\"twitter-tweet\" data-media-max-width=\"560\"><p lang=\"en\" dir=\"ltr\">In partnership with <a href=\"https://twitter.com/PlanRwanda?ref_src=twsrc%5Etfw\">@PlanRwanda</a>, Bamporeze collaborated with <a href=\"https://twitter.com/Rwanda_Child?ref_src=twsrc%5Etfw\">@Rwanda_Child</a> to build the capacity of local leaders and community based child and family protection mechanisms in <a href=\"https://twitter.com/NyaruguruDistr?ref_src=twsrc%5Etfw\">@NyaruguruDistr</a> to ensure accountability and synergy in eradicating violence against children. <a href=\"https://twitter.com/hashtag/VAC?src=hash&amp;ref_src=twsrc%5Etfw\">#VAC</a> <a href=\"https://t.co/ykRkBaeRoj\">pic.twitter.com/ykRkBaeRoj</a></p>&mdash; BAMPOREZE (@ABA_Rwanda) <a href=\"https://twitter.com/ABA_Rwanda/status/1903400075121856980?ref_src=twsrc%5Etfw\">March 22, 2025</a></blockquote>
<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Every child has a right to education. All girls, regardless of income level, social status, race or cultural background — have a right to learn on equal terms with boys including access to quality teachers, curriculums and learning materials. <a href=\"https://twitter.com/hashtag/Girlseducation?src=hash&amp;ref_src=twsrc%5Etfw\">#Girlseducation</a> <a href=\"https://t.co/w2Qn42PIQR\">pic.twitter.com/w2Qn42PIQR</a></p>&mdash; BAMPOREZE (@ABA_Rwanda) <a href=\"https://twitter.com/ABA_Rwanda/status/1900548365022044375?ref_src=twsrc%5Etfw\">March 14, 2025</a></blockquote>
        `}} />
      </div>
    </div>
  );
} 