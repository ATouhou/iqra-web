import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

export default class ResultModal extends Component {
    render() {
        const { isModalShown, resultObject, closeResultModal } = this.props;

        return (
            <Modal
                className="result-modal"
                overlayClassName="result-modal-overlay"
                isOpen={isModalShown}
                onRequestClose={closeResultModal}
            >
                <div className="metadata-container">
                    <div className="surah-header">
                        <div className="surah-name">{resultObject.translationSurahName}</div>
                        <div className="surah-ayah-number">
                            {resultObject.surahNum}:{resultObject.ayahNum}
                        </div>
                    </div>
                    <div className="arabic-surah-name">{resultObject.arabicSurahName}</div>
                </div>
                <div className="ayah-block">
                    <div className="arabic-ayah">{resultObject.arabicAyah}</div>
                    <div
                        className="translated-ayah"
                        dangerouslySetInnerHTML={{ __html: resultObject.translationAyah }}
                    />
                </div>
            </Modal>
        );
    }
}

ResultModal.propTypes = {
    isModalShown: PropTypes.bool.isRequired,
    resultObject: PropTypes.object.isRequired,
    closeResultModal: PropTypes.func.isRequired,
};
