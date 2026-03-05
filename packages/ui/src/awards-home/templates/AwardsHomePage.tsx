import * as React from "react";
import { AwardsNavbar } from "../organisms/AwardsNavbar";
import { AwardsHero } from "../organisms/AwardsHero";
import { AwardsNumbers } from "../organisms/AwardsNumbers";
import { AwardsGroups } from "../organisms/AwardsGroups";
import { AwardsSchedule } from "../organisms/AwardsSchedule";
import { AwardsProcess } from "../organisms/AwardsProcess";
import { AwardsJury } from "../organisms/AwardsJury";
import { AwardsWhere } from "../organisms/AwardsWhere";
import { AwardsWhy } from "../organisms/AwardsWhy";
import { AwardsFaq } from "../organisms/AwardsFaq";
import { AwardsContact } from "../organisms/AwardsContact";
import { AwardsFooter } from "../organisms/AwardsFooter";

export function AwardsHomePage() {
  return (
    <>
      <AwardsNavbar />
      <div className="page-wrapper-home awards-home-scope">
      <AwardsHero />
      <AwardsNumbers />
      <AwardsGroups />
      <AwardsSchedule />
      <AwardsProcess />
      <AwardsJury limit={5} showMoreHref="/jury" />
      <AwardsWhere />
      <AwardsWhy />
      <AwardsFaq />
      <AwardsContact />
      <AwardsFooter />
    </div>
    </>
  );
}
