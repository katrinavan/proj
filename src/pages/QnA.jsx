import React from "react";
import './QnA.css'; // Make sure to create and import the QnA.css file for styles

const QnA = () => {
  return (
    <div className="qna-container">
      <h1>Frequently Asked Questions</h1>
      <div className="qna-item">
        <h2>How can I become a contributor to the blog?</h2>
        <p>If you're interested in becoming a contributor, please visit our 'Write for Us' page for submission guidelines and to submit your article for review.</p>
      </div>
      <div className="qna-item">
        <h2>What topics can I write about?</h2>
        <p>We're interested in a variety of topics including technology, lifestyle, productivity, and more. Please check our submission guidelines for a full list of topics we cover.</p>
      </div>
      <div className="qna-item">
        <h2>Do you accept guest posts?</h2>
        <p>Yes, we welcome guest posts. Please check our guidelines for guest writers and get in touch with your proposal or draft.</p>
      </div>
      <div className="qna-item">
        <h2>Can I republish my submission on my own blog?</h2>
        <p>After your content is published on our site, we ask that you wait at least two weeks before republishing it elsewhere, and when you do, please include a link back to the original post on our site.</p>
      </div>
      <div className="qna-item">
        <h2>How do I report a problem or an offensive comment?</h2>
        <p>If you encounter a problem or see a comment that violates our community guidelines, please use the 'Report' feature next to the comment or contact us directly.</p>
      </div>
      <div className="qna-item">
        <h2>How often is new content posted?</h2>
        <p>New content is posted daily. Subscribe to our newsletter or follow us on social media to get updates on the latest posts.</p>
      </div>
      <div className="qna-item">
        <h2>Can I advertise on your blog?</h2>
        <p>We offer various advertising options. Please visit our 'Advertise With Us' page for more information and to get in touch.</p>
      </div>
      {/* Add more Q&A items as needed */}
    </div>
  );
};

export default QnA;
