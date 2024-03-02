import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { ExpandMore } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useState } from 'react';

const APOSTROPHE = '\''

const FAQ = () => {
  const [isWhatsMeaningFAQOpen, setIsWhatsMeaningFAQOpen] = useState(false)
  const [isPaddingParticipationFAQOpen, setPaddingParticipationFAQOpen] = useState(false)
  const [isHowToFindMPOpen, setHowToFindMPOpen] = useState(false)

  return (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{ marginBottom: 0 }}>FAQs</h2>
      <div>
        <div>
          <ListItemButton
            onClick={() => setHowToFindMPOpen(!isHowToFindMPOpen)}
          >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="How do I know who is my MP?" style={{ textAlign: 'center' }} />
            {isHowToFindMPOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isHowToFindMPOpen} timeout="auto" unmountOnExit style={{ paddingLeft: 20, paddingRight: 20, padding: 10 }}>
            <p>
              The <a href="https://www.parliament.gov.sg/mps/find-mps-in-my-constituency">Singapore Parliament website</a>
              {' '}has you covered! Input your zip code and it will automatically resolve the MP(s) serving you.
            </p>
          </Collapse>
        </div>
        <div>
          <ListItemButton
            onClick={() => setPaddingParticipationFAQOpen(!isPaddingParticipationFAQOpen)}
          >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Is it possible for MPs to be 'padding' participation?" style={{ textAlign: 'center' }} />
            {isPaddingParticipationFAQOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isPaddingParticipationFAQOpen} timeout="auto" unmountOnExit style={{ paddingLeft: 20, paddingRight: 20, padding: 10 }}>
            <p>
              That is certainly very possible. Therefore, their participation count is
              but one metric. It does not necessarily mean that they contributed
              effectively to each debate, or even if they contributed a lot within each debate.
              These participation counts are only meant to arouse further interest by users to
              do their own research, and ascertain their MP{APOSTROPHE}s individual contributions themselves
              via the official Hansards website, or through official livestreams
              of Parliament proceedings.
              <br />
              <br />
              <p style={{ width: '50%', margin: '0 auto' }}>
                How to search on <a href="https://sprs.parl.gov.sg/search/#/home">Hansards</a>:
                <ol style={{ textAlign: 'left' }}>
                  <li>
                    Choose the parliament you want to search on, using the {APOSTROPHE}By Parliament{APOSTROPHE} selections
                  </li>
                  <li>
                    Expand the {APOSTROPHE}Show Advanced Search{APOSTROPHE} dropdown
                  </li>
                  <li>
                    Choose {APOSTROPHE}By MP{APOSTROPHE} to select the MP you want to find out more on
                  </li>
                  <li>
                    Click Search
                  </li>
                </ol>
              </p>
            </p>
          </Collapse>
        </div>
        <div>
          <ListItemButton
            onClick={() => setIsWhatsMeaningFAQOpen(!isWhatsMeaningFAQOpen)}
          >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="What is the meaning of each debate type?" style={{ textAlign: 'center' }} />
            {isWhatsMeaningFAQOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isWhatsMeaningFAQOpen} timeout="auto" unmountOnExit>
            <TableContainer component={Paper}>
              <Table aria-label="FAQ table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Debate Type</TableCell>
                    <TableCell align="center">Explanation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Written / Oral Answers to Questions</TableCell>
                    <TableCell align="center">
                      Members of Parliament can ask Ministers questions about their areas of responsibility, with notice given seven days in advance.
                      Each Member can ask up to five questions per day, with a maximum of three for oral response.
                      Ministers reply verbally during Question Time, followed by additional questions.

                      Responses to written questions are shared with Members and recorded in the Official Report.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/question-for-oral-written-answer/Question%20for%20Oral">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Written Answers to Questions for Oral Answer Not Answered by End of Question Time</TableCell>
                    <TableCell align="center">
                      If there is no more time left, a Question for Oral Answer will be answered
                      in written fashion, unless the sitting is postponed.
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">President{APOSTROPHE}s Address</TableCell>
                    <TableCell align="center">
                      After Parliament reconvenes following dissolution or prorogation,
                      the President delivers a speech outlining the Government{APOSTROPHE}s proposed direction,
                      policies, and programs.
                      A motion is then moved to thank the President for the Address, and
                      there{APOSTROPHE}s a five-day debate period for Members to discuss and
                      review the Government{APOSTROPHE}s plans outlined in the Address.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/president's-address/President's%20Address">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Budget</TableCell>
                    <TableCell align="center">
                      The Government presents its annual Budget to Parliament, outlining revenue,
                      spending plans, and funding sources.
                      Parliament debates and approves expenditure estimates,
                      then considers the Supply Bill to authorize fund withdrawals as outlined in the Budget.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/budget/Budget">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Ministerial Statement</TableCell>
                    <TableCell align="center">
                      A statement may be made by a Minister in Parliament on a matter of public importance. Members may seek clarification on the statement but no debate shall be allowed thereon.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/docs/default-source/default-document-library/standing-orders-of-the-parliament-of-singapore43d430dbcb5f64e2b198ff00006af031.pdf">
                        Reference: Parliament Standing Orders, section on Ministerial Statements
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Clarification</TableCell>
                    <TableCell align="center">
                      A Member may interrupt another Member{APOSTROPHE}s speech briefly to
                      seek clarification, provided the Member speaking is willing to give way
                      and allow the clarification to be made.
                      A Member may also explain some part of his speech
                      which has been misunderstood or misinterpreted.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/point-of-clarification/Point%20of%20Clarification">
                        Reference
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Bills</TableCell>
                    <TableCell align="center">
                      It is a draft law. Bills introduced by the Government are known as Government Bills. Those introduced by back benchers are known as private Member{APOSTROPHE}s Bills.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/bill/Bill">Reference</a>
                    </TableCell>
                  </TableRow>
                  {/* <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">Bills Introduced</TableCell>
                      <TableCell align="right">
                        It is a draft law. Bills introduced by the Government are known as Government Bills. Those introduced by back benchers are known as private Member{APOSTROPHE}s Bills.
                        <br />
                        <br />
                        <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/bill/Bill">Reference</a>
                      </TableCell>
                    </TableRow> */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Matter Raised On Adjournment Motion</TableCell>
                    <TableCell align="center">
                      At the end of a sitting day, a motion for the adjournment of Parliament is moved.
                      At this point, a Member may claim the right to raise any matter for which
                      the Government is responsible.
                      The Member must give at least three clear days{APOSTROPHE} notice of the subject matter to be raised.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/right-to-raise-a-matter-on-a-motion-for-adjournment/Right%20to%20Raise%20a%20Matter%20on%20a%20Motion%20for%20Adjournment">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Motion</TableCell>
                    <TableCell align="center">
                      A proposal for the House to do something, to order something to be done or to express an opinion on a matter. All questions which come before Parliament or Committee for decision originate from a motion.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/motion/Motion">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Corrections by Written Statements</TableCell>
                    <TableCell align="center">
                      A Minister or a Parliamentary Secretary may,
                      with the leave of the Speaker,
                      make a written statement to correct any factual error
                      made by him in a speech.
                      <br />
                      The statement must be confined to a statement of the factual error
                      and the correct facts, and must not include any explanation or opinion
                      or any new information that is not necessary to correct the factual error.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/docs/default-source/default-document-library/standing-orders-of-the-parliament-of-singapore43d430dbcb5f64e2b198ff00006af031.pdf">
                        Reference: Parliament Standing Orders, section on Official Reports
                      </a>
                    </TableCell>
                  </TableRow>
                  {/* <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">Tributes</TableCell>
                      <TableCell align="center">
                        TODO
                      </TableCell>
                    </TableRow> */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Point of Order</TableCell>
                    <TableCell align="center">
                      During a sitting, any Member may bring to the Speaker{APOSTROPHE}s immediate notice any breach of order or rules of the House. A Member is entitled in such cases to interrupt the proceedings by rising and saying, “On a point of order, Mr Speaker” and briefly state his point of order. No speeches are allowed.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/point-of-order/Point%20of%20Order">Reference</a>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Petition</TableCell>
                    <TableCell align="center">
                      In Singapore, a person or corporation may submit a petition to the House through a Member. Besides stating grievances, the petition should also state the remedies which are sought.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/petition/Petition">Reference</a>
                    </TableCell>
                  </TableRow>
                  {/* <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">Speaker / Announcement by Speaker</TableCell>
                      <TableCell align="right">
                        TODO
                      </TableCell>
                    </TableRow> */}
                  {/* <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">Administration Of Oaths</TableCell>
                      <TableCell align="right">
                        TODO
                      </TableCell>
                    </TableRow> */}
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">Personal Explanation</TableCell>
                    <TableCell align="center">
                      A short statement by a Member to explain, excuse, justify or apologise for his conduct with regard to a particular question or occasion, or to correct an alleged misrepresentation. No debate takes place on the explanation. Permission to make a personal explanation must be obtained from the Speaker.
                      <br />
                      <br />
                      <a href="https://www.parliament.gov.sg/parliamentary-business/glossary/Details/personal-explanation/Personal%20Explanation">Reference</a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        </div>
        {/* <br />
        Permission to Members to be Absent - TODO */}
        {/* <br />
        Attendance - TODO */}
      </div>
    </div>
  )
}

export default FAQ;