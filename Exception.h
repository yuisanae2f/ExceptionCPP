#pragma once
#include <stdexcept>

namespace yuisanae2f {
	namespace ExceptionCPP {
        class Plain : public std::exception {
        public:
            Plain(const char* message, const char* url = "") : m_message(message), _url(url) { }

            const char* what() const noexcept override {
#pragma region rtn
                return m_message;
#pragma endregion
            }

            const char* url() const noexcept {
#pragma region rtn
                return _url;
#pragma endregion
            }

        protected:
            const char* m_message;
            const char* _url;
        };

        template<typename T>
        class Generic : public Plain {
        public:
            Generic(const char* message, const char* url = "", T seeAlso = 0) : Plain(message, url), seeAlso(seeAlso) { }
            const T seeAlso;
        };
	}
}