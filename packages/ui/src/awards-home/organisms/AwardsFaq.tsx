import * as React from "react";
import { FaqItem } from "../molecules/FaqItem";

const faqItems = [
  {
    question: "Who is the coordinator?",
    answer: (
      <>
        The coordinator is the person who ensures the independence of the vote.
        He does not take part in the evaluation of the works, while his role is:
        <br />- ensuring the correctness of the voting, <br />- verifying all
        paperwork, <br />- checking compliance with RODO procedures, <br />-
        Independence of the selection of nominees and winners, <br />- overseeing
        the entire project.
      </>
    ),
  },
  {
    question: "How will we make sure that the WaysConf Awards are objective?",
    answer: (
      <>
        This is a big challenge, and we will try to do our best. What does this
        mean?
        <br />- multidisciplinarity of the Jury, <br />- an appropriate number of
        independent consultants, <br />- maintaining anonymity in voting (for as
        long as possible), <br />- taking part in the voting procedure only those
        projects with which no member of the Jury is in any way connected, <br />-
        publication of clear voting methods.
      </>
    ),
  },
  {
    question: "What about NDA projects?",
    answer: (
      <>
        Make sure everything you submit has approval from clients before
        submitting. Projects submitted to the WaysConf Awards may be nominated
        for the Audience voting, which entails publication of the submission on
        the website and at the Ways Conf Awards.
        <br />
        <br />In case you want to submit to the competition, for example, a
        process or solution in a project with strict NDA, but the very issues of
        customers, audience, users, etc. are irrelevant in the submission - you
        can submit a *white label* project, while you, as the submitter, take on
        any claims of the client.
      </>
    ),
  },
  {
    question: "What kind of projects can be submitted?",
    answer:
      "Everything that has an interface and in some way facilitates communication between a machine and a user. You have specific lists next to the submission buttons above.",
  },
  {
    question: "Do the projects need to be published or only documented?",
    answer: "Projects have to be published.",
  },
  {
    question: "Who can submit their work?",
    answer:
      "Since **only non-NDA projects are submitted to the competition, a project can be submitted by a person who is able to declare that the submitted work is free of contractual claims. Thus, it can be a contact person, project manager, or supervisor. In addition, a field for the contact person is included in the submission form. Therefore, it is worthwhile for the contact person to be aware of the submission of a particular project to the competition. If you meet these two requirements, go ahead and send your application.",
  },
  {
    question: "What can be attached to the form?",
    answer:
      "You can submit up to 3 images, each with a maximum size of 10MB. Additionally, you can include a link to further materials at the end of your submission or send attachments to awards@waysconf.com.",
  },
  {
    question: "How does the Jury's vote look like?",
    answer:
      "Jury voting is subjective. Each member of the jury will be given anonymous works to evaluate. They will rate the projects based on their personal preferences, without access to any project metrics. The evaluation involves selecting their top 5 projects and assigning points accordingly, with the highest-ranking project receiving 5 points and subsequent projects receiving decreasing points. The coordinator will collect all the votes and calculate the average score by dividing the total points by the number of possible votes. Please note that jury members cannot vote for their own related projects. The number of possible votes may vary as a result.",
  },
  {
    question: "Is it possible to submit more than one work?",
    answer:
      "In each category, you may submit up to three projects. While you can submit multiple entries to the contest, each project may be entered into a maximum of two categories.",
  },
  {
    question: "We have a case study described on the website - can I post a link as a submission?",
    answer:
      "We try to make the process of submitting work as simple as possible. If you already have a case study written down, as much as possible post a link to it. However, make sure to include the information we suggest you include in your contest submission. Also, don't forget to complete the metric that is necessary for the submission.",
  },
  {
    question: "What language can the submission be in?",
    answer:
      "The official language is English, but you can submit it in Polish, and we will translate it ourselves.",
  },
  {
    question: "Can I verify the application with someone?",
    answer:
      "Yes, however, only from the formal point of view. This includes: verification of the submission category, matters related to RODO, NDA, and verification of the correctness of filling in the halves regarding the metrics. We won't help you with this \"How to describe your project?\", you have to complete this information on your own, as this is an element subject to the Jury's evaluation.",
  },
  {
    question: "Are there limits on awards and nominations?",
    answer: (
      <>
        We plan to award the following statuettes:
        <br />• Best Website<br />• Best Mobile App<br />• Best Desktop &amp; Web
        App<br />• Best Student Project<br />• Best No-Code Solution App<br />•
        Best No-Code Solution Website
        <br />
        <br />Additionally, we will have public choice awards in the same
        categories:
        <br />• Best Public Choice Website<br />• Best Public Choice Mobile App
        <br />• Best Public Choice Desktop &amp; Web App<br />• Best Public Choice
        Student Project<br />• Best Public Choice No-Code Solution App<br />• Best
        Public Choice No-Code Solution Website
      </>
    ),
  },
  {
    question: "Can I improve my submission?",
    answer:
      "Once a submission has been sent, it is not possible to modify it. The exception to this is NDA issues - in these matters we will always help to make sure everything legally fits. For this matter, write to awards@waysconf.com",
  },
  {
    question: "Who can come to the gala?",
    answer:
      "The gala will be part of the official WaysConf Awards Gala, held at Expo Kraków on September 17th at 17:00, right after the last talks at WaysConf. Participation is free and everyone is welcome. If you are not in the top group of the projects, you can still come for free after 16:30 without a ticket.",
  },
  {
    question: "Is there a fee to apply?",
    answer:
      "The application is 100% free of charge. The prizes awarded are of low value, so there are no additional issues such as tax on prizes.",
  },
  {
    question: "Out of what time period can I submit a project?",
    answer:
      "You can submit projects on which work was carried out in the period from June 2024 and June 2025. The submission period is from July 16th, 2025 to August 16th, 2025.",
  },
];

export type AwardsFaqProps = {
  items?: typeof faqItems;
  title?: string;
};

export function AwardsFaq({
  items = faqItems,
  title = "Frequently Asked Questions",
}: AwardsFaqProps) {
  return (
    <section className="section-awards-faq">
      <div className="awards-faq-content">
        <h3 className="ways25-heading1 text-align-center mobile-custom">
          {title}
        </h3>
        <div className="awards-faq-group">
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
